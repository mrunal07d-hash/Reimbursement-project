import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

router.post("/signup", async (req,res)=>{
  const {name,email,password} = req.body;
  const hash = await bcrypt.hash(password,10);
  const user = new User({name,email,password:hash,role:"ADMIN"});
  await user.save();
  res.json(user);
});
router.post("/login", async (req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email});
  const ok = await bcrypt.compare(password,user.password);
  if(!ok) return res.status(400).json({msg:"Invalid"});
  const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
  res.json({token,user});
});

export default router;

// backend/routes/expenses.js
import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

router.post("/", async (req,res)=>{
  const exp = new Expense(req.body);
  await exp.save();
  res.json(exp);
});
router.get("/", async (req,res)=>{
  const data = await Expense.find();
  res.json(data);
});

export default router;
