import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./backend/config/db.js";

import authRoutes from "./backend/routes/auth.js";
import expenseRoutes from "./backend/routes/expenses.js";
import approvalRoutes from "./backend/routes/approvals.js";
import currencyRoutes from "./backend/routes/currency.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/approvals", approvalRoutes);
app.use("/api/currency", currencyRoutes);

app.listen(5000, () => {
  console.log("Server running on 5000 🚀");
});
