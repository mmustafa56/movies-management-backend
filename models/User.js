const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    _id : mongoose.Types.ObjectId.toString(),
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

module.exports = mongoose.model("users", userSchema);
