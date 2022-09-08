const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exericseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bodyPart: {
      type: String,
      required: true,
    },
    equipment: {
      type: String,
      required: true,
    },
    gifUrl: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    statics: {
      findByName(name) {
        return this.find({ target: new RegExp(name, "i") });
      },
    },
  }
);

const exercise = mongoose.model("exercises", exericseSchema);

module.exports = exercise;
