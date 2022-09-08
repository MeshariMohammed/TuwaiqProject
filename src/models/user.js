const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: ['Admin', 'User'],
      default: "User"
    },
    height: {
      type: Number,
      required: true
    },
    weight: {
      type: Number,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    gender: {
      type: String,
      enum: ['Male', 'Female']
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
    
  },
  {
    timestamps: true,
    statics: {
      findByName(name) {
        return this.find({ name: new RegExp(name, "i") });
      },
    },
  },
);

const user = mongoose.model("users", userSchema);

module.exports = user;
