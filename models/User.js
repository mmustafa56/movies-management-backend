const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId, // Correct type
      default: () => new mongoose.Types.ObjectId(), // Generates a unique ObjectId
  },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      city: {
        type: String,
      },
      country: {
        type: String,
      },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
