const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || process.env.ORDER_TO_EMAIL || "andrijadesignnn@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM;
const SEND_CUSTOMER_CONFIRMATION = process.env.SEND_CUSTOMER_CONFIRMATION === "true";

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendEmail({ to, subject, html, replyTo }) {
  if (!process.env.RESEND_API_KEY) {
    // Developer note: add RESEND_API_KEY in Vercel Environment Variables to enable automatic project inquiry emails.
    throw new Error("Contact email service is not configured on the server.");
  }

  if (!FROM_EMAIL) {
    throw new Error("RESEND_FROM is not configured on the server.");
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
    throw new Error(`Resend email failed with status ${response.status}: ${errorText || "Email provider error"}`);
  }
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const name = String(body.name || "Website visitor").trim();
  const contact = String(body.email || "").trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
  const projectType = String(body.projectType || "Not selected").trim();
  const company = String(body.company || "Not added").trim();
  const timeline = String(body.timeline || "Not selected").trim();
  const budget = String(body.budget || "Not added").trim();
  const deadline = String(body.deadline || timeline || "Not selected").trim();
  const referenceLinks = String(body.referenceLinks || "Not added").trim();
  const preferredContact = String(body.preferredContact || "Email").trim();
  const message = String(body.message || "").trim();

  if (!contact || !message) {
    return res.status(400).json({ message: "Contact and message are required." });
  }

  const ownerHtml = `
    <h2>New Design Project Inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(contact)}</p>
    <p><strong>Company / Brand:</strong> ${escapeHtml(company)}</p>
    <p><strong>Service needed:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Deadline:</strong> ${escapeHtml(deadline)}</p>
    <p><strong>Preferred contact:</strong> ${escapeHtml(preferredContact)}</p>
    <p><strong>Reference links:</strong></p>
    <p>${escapeHtml(referenceLinks).replace(/\n/g, "<br>")}</p>
    <p><strong>Project description:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const clientHtml = `
    <h2>Your Project Inquiry Has Been Received</h2>
    <p>Hi ${escapeHtml(name)},</p>
    <p>Thank you for reaching out. I’ve received your project inquiry and will review the details before getting back to you with the next steps.</p>
    <p><strong>Service needed:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Deadline:</strong> ${escapeHtml(deadline)}</p>
    <p><strong>Project description:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    await sendEmail({
      to: CONTACT_TO_EMAIL,
      subject: "New Design Project Inquiry",
      html: ownerHtml,
      replyTo: isEmail ? contact : undefined
    });
  } catch (error) {
    console.error("Main contact email failed:", {
      to: CONTACT_TO_EMAIL,
      subject: "New Design Project Inquiry",
      error: error.message
    });

    return res.status(503).json({
      message: "Contact email could not be sent by the server.",
      detail: error.message
    });
  }

  if (SEND_CUSTOMER_CONFIRMATION && isEmail) {
    try {
      await sendEmail({
        to: contact,
        subject: "Your Project Inquiry Has Been Received",
        html: clientHtml,
        replyTo: CONTACT_TO_EMAIL
      });
    } catch (error) {
      console.error("Customer contact confirmation email failed:", {
        to: contact,
        subject: "Your Project Inquiry Has Been Received",
        error: error.message
      });
    }
  }

  return res.status(200).json({ ok: true });
};
