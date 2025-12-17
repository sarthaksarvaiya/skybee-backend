import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000,
});


export const sendMail = async ({ name, email, phone, message }) => {
  await transporter.sendMail({
    from: `"Skybee Website" <${process.env.EMAIL_USER}>`,
    to: "info@skybeepufpanel.com",
    replyTo: email,
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
