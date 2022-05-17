import mongoose from "mongoose";
import validator from "validator";

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
});

export const login = mongoose.model("register", loginSchema);
