const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nip: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Your name.."],
  },
  email: {
    type: String,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Your email.."],
  },
  gender: {
    type: String,
    required: [true, "Your gender.."],
  },
  address: {
    type: String,
    required: [true, "Your valid address.."],
  },
  phone_number: {
    type: String,
    required: [true, "Your phone number.."],
  },
  subject_category: {
    type: String,
    required: [true, "Your subject category.."],
  },
});

module.exports = mongoose.model("user", UserSchema);
