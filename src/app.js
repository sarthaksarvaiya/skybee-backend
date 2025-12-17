import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 👇 ROOT TEST ROUTE (MUST BE ABOVE export)
app.get("/", (req, res) => {
  res.send("Skybee backend is running ✅");
});

// Contact API
app.use("/api/contact", contactRoutes);

export default app;
