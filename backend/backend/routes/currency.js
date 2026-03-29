const express = require("express");
const router = express.Router();

// Simple working route
router.get("/", (req, res) => {
    res.json({
        message: "Currency API working",
        currency: "INR"
    });
});

module.exports = router;
