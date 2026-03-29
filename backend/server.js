import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.js";
import expenseRoutes from "./routes/expenses.js";
import approvalRoutes from "./routes/approvals.js";
import currencyRoutes from "./routes/currency.js"; // ✅ added

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/approvals", approvalRoutes);
app.use("/api/currency", currencyRoutes); // ✅ added BEFORE listen

// Start server
app.listen(5000, () => {
  console.log("Server running on 5000 🚀");
});
