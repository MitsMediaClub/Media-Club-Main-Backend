const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const emailSchema = new Schema(
  {
    emailValue: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Email", emailSchema);
