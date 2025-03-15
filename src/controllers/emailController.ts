import { Request, Response } from "express";
import { sendEmail } from "../utils/mail";

export const handleEmail = async (req: Request, res: Response) => {
  try {
    const { email, name, subject, message } = req.body;
    const data = { from_email: email, name, subject, message };

    await sendEmail(data);
    res.status(200).json({ message: "E-mail succesvol verzonden!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Fout bij verzenden e-mail" });
  }
};
