import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

router.put("/:id", async (req,res)=>{
  const {approver,status} = req.body;
  const exp = await Expense.findById(req.params.id);

  const step = exp.approvals.find(a=>a.approver===approver);
  if(step) step.status = status;

  const approved = exp.approvals.filter(a=>a.status==="APPROVED").length;
  const total = exp.approvals.length;

  if(approved >= Math.ceil(total*0.6)){
    exp.status = "APPROVED";
  }

  await exp.save();
  res.json(exp);
});
export default router;
