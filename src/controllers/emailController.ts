import { Request, Response } from "express";
import { sendEmail } from "../utils/mail";

export const handleEmail = async (req: Request, res: Response) => {
  try {
    const { from_email, name, subject, message } = req.body;

    await sendEmail({ from_email, name, subject, message });

    return res
      .status(200)
      .json({ success: true, message: "E-mail succesvol verzonden!" });
  } catch (error) {
    console.error("❌ Fout bij verzenden e-mail:", error);
    return res
      .status(500)
      .json({ success: false, message: "Fout bij verzenden e-mail" });
  }
};
