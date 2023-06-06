const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const userShema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: {
      type: String,
      required: [true, "Avatar is required"],
    },
  },
  { versionKey: false, timestamps: true }
);

userShema.post("save", handleMongooseError);

const User = model("user", userShema);

module.exports = {
  User,
};
