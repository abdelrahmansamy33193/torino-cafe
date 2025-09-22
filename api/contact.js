// api/contact.js (Vercel Serverless Function)
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method Not Allowed" });

  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) return res.status(400).json({ ok: false, error: "Missing fields" });

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.TO_EMAIL || "owner@example.com";

    await resend.emails.send({
      from: "Torino Café <onboarding@resend.dev>",
      to,
      reply_to: email,
      subject: `New message from ${name}`,
      html: `
        <h2>Torino Café - Contact Form</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <p><b>Message:</b></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("contact error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}

function escapeHtml(str=""){
  return String(str).replace(/[&<>"']/g, s => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[s]));
}
