const Email = require("../models/emailModel.js");
const mongoose = require("mongoose");

//Get all emails
const getAllEmails = async (req, res) => {
  const emails = await Email.find({}).sort({ createdAt: -1 });
  res.status(200).json(emails);
};

//Create new email

const createEmail = async (req, res) => {
  let { emailValue } = req.body;

  // add new doc to db
  try {
    const email = await Email.create({
      emailValue,
    });
    res.status(200).json(email);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createEmail,
  getAllEmails,
};
