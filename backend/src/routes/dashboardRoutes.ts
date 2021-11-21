import express from "express";

const router = express.Router();

const { dashboardData } = require("../controllers/authController");
const { auth } = require("../middlewares/auth");

router.get("/dashboard-data", auth, dashboardData);

module.exports = router;
