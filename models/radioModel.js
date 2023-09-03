const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const radioSchema = new Schema(
  {
    radioName: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    highlight: {
      type: Boolean,
      default: false,
    },
    radioId: {
      type: String,
      required: true,
    },
    writeUp: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: true,
    },
    length: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

radioSchema.index({ radioId: 1 }, { unique: true });

module.exports = mongoose.model("Radio", radioSchema);
