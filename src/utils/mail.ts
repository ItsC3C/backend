import nodemailer from "nodemailer";
import { EMAIL_USER, EMAIL_PASS } from "../config/env";
import { mailData } from "../types/mailTypes";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export const sendEmail = async (data: mailData) => {
  try {
    const info = await transporter.sendMail({
      from: `"Support Team" <${EMAIL_USER}>`,
      to: data.from_email,
      subject: `Bedankt voor je bericht, ${data.name}!`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Email Bevestiging</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    width: 100%;
                    max-width: 600px;
                    margin: 20px auto;
                    background: #ffffff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                .header {
                    background: #28a745;
                    color: #ffffff;
                    text-align: center;
                    padding: 15px;
                    font-size: 22px;
                    font-weight: bold;
                    border-radius: 10px 10px 0 0;
                }
                .content {
                    padding: 20px;
                    font-size: 16px;
                    color: #333;
                    line-height: 1.5;
                }
                .button {
                    display: inline-block;
                    background: #28a745;
                    color: #ffffff;
                    padding: 12px 20px;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                    margin-top: 10px;
                }
                .footer {
                    text-align: center;
                    font-size: 12px;
                    color: #666;
                    margin-top: 20px;
                }
                @media (max-width: 600px) {
                    .container {
                        width: 95%;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">Bedankt voor je bericht, ${data.name}!</div>
                <div class="content">
                    <p>Beste ${data.name},</p>
                    <p>We hebben je bericht ontvangen en nemen zo snel mogelijk contact met je op.</p>
                    <p><strong>Je bericht:</strong></p>
                    <blockquote style="background: #f9f9f9; padding: 10px; border-left: 4px solid #28a745;">
                        ${data.message}
                    </blockquote>
                    <p>Als je dringende vragen hebt, kun je altijd contact met ons opnemen via onze website.</p>
                    <p><a href="google.com" class="button">Ga naar de website</a></p>
                </div>
                <div class="footer">
                    &copy; 2025 Jouw Bedrijf | <a href="google.com" style="color: #28a745; text-decoration: none;">Website</a>
                </div>
            </div>
        </body>
        </html>
      `,
    });

    console.log("✅ E-mail verzonden:", info.messageId);
  } catch (error) {
    console.error("❌ Fout bij verzenden e-mail:", error);
  }
};
