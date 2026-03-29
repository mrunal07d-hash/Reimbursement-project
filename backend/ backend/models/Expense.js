import mongoose from "mongoose";

const schema = new mongoose.Schema({
  description: String,
  amount: Number,
  status: { type: String, default: "PENDING" },
  approvals: [
    {
      approver: String,
      status: { type: String, default: "PENDING" }
    }
  ]
});

export default mongoose.model("Expense", schema);
