const Event = require("../models/eventModel.js");
const mongoose = require("mongoose");

//Gets a single event
const getEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ eventId: req.body.eventId });
    if (!event) {
      return res.json({ error: "No such event!" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.json({ badError: "Error" });
  }
};

//Deletes a single event
const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({ eventId: req.body.eventId });
    if (!event) {
      return res.json({ error: "No such event!" });
    }
    res.status(200).json({ msg: "Deleted" });
  } catch (err) {
    res.json({ badError: "Error" });
  }
};

//Deletes all events
const deleteEvents = async (req, res) => {
  try {
    await Event.deleteMany({});
    res.status(200).json({ msg: "Deleted Everything" });
  } catch (err) {
    res.json({ badError: "Error" });
  }
};

//Updates a single event
const updateEvent = async (req, res) => {
  try {
    console.log(req.body.updatedEvent);
    if (req.body.updatedEvent.picUrls) {
      req.body.updatedEvent.picUrls = req.body.updatedEvent.picUrls.split(",");
    }
    console.log(req.body.updatedEvent);
    const event = await Event.findOneAndUpdate(
      { eventId: req.body.updatedEvent.eventId },
      {
        ...req.body.updatedEvent,
      }
    );
    if (!event) {
      return res.json({ error: "No such event!" });
    }
    res.status(200).json({ msg: "Deleted" });
  } catch (err) {
    res.json({ badError: "Error" });
  }
};

//Get highlighted events
const getEvents = async (req, res) => {
  const events = await Event.find({ highlight: true }).sort({ createdAt: -1 });
  res.status(200).json(events);
};

//Get all events
const getAllEvents = async (req, res) => {
  const events = await Event.find({}).sort({ createdAt: -1 });
  res.status(200).json(events);
};

//Create new event

const createEvent = async (req, res) => {
  let {
    eventName,
    imgUrl,
    link,
    highlight,
    bgUrl,
    writeUp,
    picUrls,
    eventId,
    drive,
  } = req.body.newEvent;
  console.log(picUrls);
  if (picUrls) {
    picUrls = picUrls.split(",");
  }
  console.log(picUrls);
  // add new doc to db
  try {
    const event = await Event.create({
      eventName,
      imgUrl,
      link,
      highlight,
      bgUrl,
      writeUp,
      picUrls,
      eventId,
      drive,
    });
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getEvent,
  getEvents,
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  deleteEvents,
};
