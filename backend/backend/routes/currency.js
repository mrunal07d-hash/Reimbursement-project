const express = require("express");
const router = express.Router();

// FIXED SAFE ROUTE
router.get("/", (req, res) => {
    res.json({
        message: "Currency route working",
        currency: "INR"
    });
});

module.exports = router;
