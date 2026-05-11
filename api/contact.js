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

async function sendEmail({ to, subject, html, replyTo }) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("Contact email service is not configured on the server.");
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

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const name = String(body.name || "Website visitor").trim();
  const email = String(body.email || "").trim();
  const projectType = String(body.projectType || "Not selected").trim();
  const timeline = String(body.timeline || "Not selected").trim();
  const budget = String(body.budget || "Not added").trim();
  const message = String(body.message || "").trim();

  if (!email || !message) {
    return res.status(400).json({ message: "Email and message are required." });
  }

  const ownerHtml = `
    <h2>New portfolio inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
    <p><strong>Budget / scope:</strong> ${escapeHtml(budget)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const clientHtml = `
    <h2>Your message was received</h2>
    <p>Hi ${escapeHtml(name)},</p>
    <p>Thank you for contacting Andrija Designs. Your project inquiry has been received and will be reviewed soon.</p>
    <p><strong>Project type:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    await sendEmail({
      to: OWNER_EMAIL,
      subject: `Portfolio inquiry from ${name}`,
      html: ownerHtml,
      replyTo: email
    });

    await sendEmail({
      to: email,
      subject: "Your message was received - Andrija Designs",
      html: clientHtml,
      replyTo: OWNER_EMAIL
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(503).json({
      message: "Contact email could not be sent by the server.",
      detail: error.message
    });
  }
};
