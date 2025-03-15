import express from "express";
import { handleEmail } from "../controllers/emailController";

const router = express.Router();

router.post("/mail", handleEmail);

export default router;
