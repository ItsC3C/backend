import "dotenv/config";
import cors from "cors";
import express from "express";
import emailRoutes from "./routes/emailRoutes";
import { PORT } from "./config/env";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(emailRoutes);

const port = PORT || 3001;
app.listen(port, () => {
  console.log(`✅ Server draait op poort ${port} 🚀`);
});
