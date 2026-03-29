import express from "express";

const router = express.Router();

// ✅ Correct callback function
router.get("/", (req, res) => {
  res.json({
    message: "Currency API working ✅",
    currency: "INR"
  });
});

export default router;
