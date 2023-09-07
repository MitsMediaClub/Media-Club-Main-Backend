const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    eventName: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
    highlight: {
      type: Boolean,
      default: false,
    },
    picUrls: {
      type: Array,
      default: [],
    },
    eventId: {
      type: String,
      unique: true,
      required: true,
    },
    bgUrl: {
      type: String,
      required: true,
    },
    writeUp: {
      type: String,
      required: true,
    },
    drive: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
