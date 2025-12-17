import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (data) => {
  try {
    await resend.emails.send({
      from: "Skybee Website <contact@skybeepufpanel.com>",
      to: ["info@skybeepufpanel.com"],
      replyTo: data.email,
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Request</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone || "-"}</p>
        <p><b>Message:</b><br/>${data.message}</p>
      `,
    });
  } catch (error) {
    console.error("Resend email failed:", error);
    throw error;
  }
};
