const express = require("express");
const router = express.Router();
const {
  getAllEmails,
  createEmail,
} = require("../controllers/emailController.js");

// Get all emails
router.get("/", getAllEmails);

//Post a new email
router.post("/", createEmail);

module.exports = router;
