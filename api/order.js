const OWNER_EMAIL = process.env.OWNER_EMAIL || "andrijadesignnn@gmail.com";
const FROM_EMAIL = process.env.MAIL_FROM || "Andrija Designs <onboarding@resend.dev>";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parsePrice(value = "") {
  const amount = Number(String(value).match(/\d+([.,]\d+)?/)?.[0]?.replace(",", ".") || 0);
  return Math.round(amount * 100);
}

async function sendEmail({ to, subject, html, replyTo }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Order email service is not configured on the server.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to,
      subject,
      html,
      reply_to: replyTo
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Email provider error");
  }
}

async function createStripeCheckout({ product, price, quantity, customerEmail }) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.SITE_URL) {
    return "";
  }

  const unitAmount = parsePrice(price);
  if (!unitAmount) return "";

  const params = new URLSearchParams();
  params.set("mode", "payment");
  params.set("success_url", `${process.env.SITE_URL}/?payment=success#merch-order`);
  params.set("cancel_url", `${process.env.SITE_URL}/?payment=cancelled#merch-order`);
  params.set("customer_email", customerEmail);
  params.set("line_items[0][quantity]", String(Math.max(Number(quantity || 1), 1)));
  params.set("line_items[0][price_data][currency]", "eur");
  params.set("line_items[0][price_data][unit_amount]", String(unitAmount));
  params.set("line_items[0][price_data][product_data][name]", product);

  const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
  });

  if (!response.ok) return "";

  const session = await response.json();
  return session.url || "";
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const product = String(body.product || "").trim();
  const price = String(body.price || "").trim();
  const estimatedTotal = String(body.estimatedTotal || price).trim();
  const quantity = String(body.quantity || "1").trim();
  const size = String(body.size || "Not selected").trim();
  const color = String(body.colorPreference || body.color || "Not added").trim();
  const payment = String(body.preferredPayment || body.payment || "To be confirmed").trim();
  const name = String(body.name || "").trim();
  const email = String(body.contact || "").trim();
  const phone = String(body.phone || "").trim();
  const instagram = String(body.instagram || "Not added").trim();
  const country = String(body.country || "").trim();
  const city = String(body.city || "").trim();
  const street = String(body.street || "").trim();
  const streetNumber = String(body.streetNumber || "").trim();
  const postal = String(body.postal || "").trim();
  const apartment = String(body.apartment || "Not added").trim();
  const message = String(body.message || "No note added.").trim();

  if (!product || !name || !email || !phone || !country || !city || !street || !streetNumber || !postal) {
    return res.status(400).json({ message: "Product, name, email, phone and full delivery address are required." });
  }

  const rows = [
    ["Product", product],
    ["Price", price],
    ["Estimated total", estimatedTotal],
    ["Quantity", quantity],
    ["Size", size],
    ["Color preference", color],
    ["Preferred payment", payment],
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Instagram", instagram],
    ["Country", country],
    ["City", city],
    ["Street", street],
    ["Street number", streetNumber],
    ["Postal code", postal],
    ["Apartment / floor", apartment],
    ["Additional note", message]
  ];

  const table = `
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;border:1px solid #ddd;">
      ${rows.map(([label, value]) => `
        <tr>
          <td style="border:1px solid #ddd;"><strong>${escapeHtml(label)}</strong></td>
          <td style="border:1px solid #ddd;">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
        </tr>
      `).join("")}
    </table>
  `;

  try {
    await sendEmail({
      to: OWNER_EMAIL,
      subject: `New merch order - ${product}`,
      html: `<h2>New merch order</h2>${table}`,
      replyTo: email
    });

    await sendEmail({
      to: email,
      subject: `Merch order received - ${product}`,
      html: `<h2>Your merch order was received</h2><p>Hi ${escapeHtml(name)}, your order has been received. Andrija will confirm availability, delivery and payment details before production.</p>${table}`,
      replyTo: OWNER_EMAIL
    });

    const wantsOnlinePayment = payment.toLowerCase().includes("online");
    const paymentUrl = wantsOnlinePayment
      ? await createStripeCheckout({ product, price, quantity, customerEmail: email })
      : "";

    return res.status(200).json({ ok: true, paymentUrl });
  } catch (error) {
    return res.status(503).json({
      message: "Order email could not be sent by the server.",
      detail: error.message
    });
  }
};
