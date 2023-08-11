const express = require("express");
const router = express.Router();
const {
  getEvent,
  getEvents,
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  deleteEvents,
} = require("../controllers/eventController.js");

// Get highlighted events
router.get("/highlight", getEvents);

// Get all events
router.get("/", getAllEvents);

//Get a single event
router.post("/event", getEvent);

//Updates an event
router.post("/update", updateEvent);

//Delete an event
router.post("/delete", deleteEvent);

//Delete an event
router.get("/deleteall", deleteEvents);

//Post a new event
router.post("/", createEvent);

module.exports = router;
