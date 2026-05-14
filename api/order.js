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

function isEmail(value = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

async function sendEmail({ to, subject, html, replyTo }) {
  if (!process.env.RESEND_API_KEY) {
    // Developer note: add RESEND_API_KEY in Vercel Environment Variables to enable automatic merch order emails.
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
  const contact = String(body.contact || "").trim();
  const customerEmail = isEmail(contact) ? contact : "";
  const cityCountry = String(body.cityCountry || "").trim();
  const message = String(body.message || "No note added.").trim();

  if (!product || !name || !contact || !cityCountry) {
    return res.status(400).json({ message: "Product, name, email or Instagram, and city / country are required." });
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
    ["Email or Instagram", contact],
    ["City / Country", cityCountry],
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
      subject: "New Merch Order Request",
      html: `<h2>New Merch Order Request</h2>${table}`,
      replyTo: customerEmail || OWNER_EMAIL
    });

    if (customerEmail) {
      await sendEmail({
        to: customerEmail,
        subject: "Your Merch Order Request Has Been Received",
        html: `<h2>Your Merch Order Request Has Been Received</h2><p>Hi ${escapeHtml(name)}, your order request has been received. I will confirm availability, final price, payment and production details shortly.</p>${table}`,
        replyTo: OWNER_EMAIL
      });
    }

    const wantsOnlinePayment = payment.toLowerCase().includes("online");
    const paymentUrl = wantsOnlinePayment
      ? await createStripeCheckout({ product, price, quantity, customerEmail: customerEmail })
      : "";

    return res.status(200).json({ ok: true, paymentUrl });
  } catch (error) {
    return res.status(503).json({
      message: "Order email could not be sent by the server.",
      detail: error.message
    });
  }
};
