import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVE } from "../config/env";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export const sendEmail = async (data: {
  from_email: string;
  name: string;
  subject: string;
  message: string;
}) => {
  const mailOptions = {
    from: EMAIL_USER,
    to: EMAIL_RECEIVE,
    subject: data.subject,
    html: `
      <h2>Nieuw Bericht</h2>
      <p><strong>Naam:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.from_email}</p>
      <p><strong>Bericht:</strong> ${data.message}</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
