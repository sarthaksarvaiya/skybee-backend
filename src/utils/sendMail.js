import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config(); // 👈 MUST be before using process.env

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async ({ name, email, phone, message }) => {
  await resend.emails.send({
    from: "Skybee Website <onboarding@resend.dev>",
    to: ["info@skybeepufpanel.com"],
    reply_to: email,
    subject: "New Contact Form Submission",
    html: `
      <h3>New Contact Request</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "-"}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });
};
