const Radio = require("../models/radioModel.js");
const mongoose = require("mongoose");

//Delete a single radio
const deleteRadio = async (req, res) => {
  try {
    const radio = await Radio.findOneAndDelete({ radioId: req.body.radioId });
    if (!radio) {
      return res.json({ error: "No such radio!" });
    }
    res.status(200).json({ msg: "Deleted" });
  } catch (err) {
    res.json({ badError: "Error" });
  }
};

//Deletes all radios
const deleteRadios = async (req, res) => {
  try {
    await Radio.deleteMany({});
    res.status(200).json({ msg: "Deleted Everything" });
  } catch (err) {
    res.json({ badError: "Error" });
  }
};

//Updates a single radio
const updateRadio = async (req, res) => {
  try {
    const radio = await Radio.findOneAndUpdate(
      { radioId: req.body.radioId },
      {
        ...req.body,
      }
    );
    if (!radio) {
      return res.json({ error: "No such radio!" });
    }
    res.status(200).json({ msg: "Updated" });
  } catch (err) {
    res.json({ badError: "Error" });
  }
};

//Get highlighted radio
const getRadio = async (req, res) => {
  const radio = await Radio.find({ highlight: true }).sort({ createdAt: -1 });
  res.status(200).json(radio);
};

//Get all radios
const getAllRadios = async (req, res) => {
  const radios = await Radio.find({}).sort({ createdAt: -1 });
  res.status(200).json(radios);
};

//Gets a single radio
const getSingleRadio = async (req, res) => {
  try {
    const radio = await Radio.findOne({ radioId: req.body.radioId });
    if (!radio) {
      return res.json({ error: "No such Radio!" });
    }
    res.status(200).json(radio);
  } catch (error) {
    res.json({ badError: "Error" });
  }
};

//Create new radio

const createRadio = async (req, res) => {
  let { radioName, imgUrl, radioId, writeUp, link, length } = req.body;
  // add new doc to db
  try {
    const radio = await Radio.create({
      radioName,
      imgUrl,
      radioId,
      writeUp,
      link,
      length,
    });

    res.status(200).json(radio);
  } catch (error) {
    res.status(400).json({ error: error.message, code: error.code });
  }
};

module.exports = {
  getAllRadios,
  getRadio,
  getSingleRadio,
  createRadio,
  updateRadio,
  deleteRadio,
  deleteRadios,
};
