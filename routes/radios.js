const express = require("express");
const {
  getAllRadios,
  createRadio,
  getRadio,
  updateRadio,
  deleteRadios,
  deleteRadio,
  getSingleRadio,
} = require("../controllers/radioController.js");
const router = express.Router();

// Get highlighted radio
router.get("/highlight", getRadio);

// Get all events
router.get("/", getAllRadios);

//Get a single radio
router.post("/radio", getSingleRadio);

//Updates an event
router.post("/update", updateRadio);

//Delete an event
router.post("/delete", deleteRadio);

//Delete all radios
router.get("/deleteall", deleteRadios);

// Post a new event
router.post("/", createRadio);

module.exports = router;
