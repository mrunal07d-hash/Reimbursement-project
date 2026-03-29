import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Currency route working ✅",
    currency: "INR"
  });
});

export default router;
