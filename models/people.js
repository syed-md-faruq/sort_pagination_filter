const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  first_name: {
      type: String,
      required: true,
  },
  last_name: {
      type: String,
      required: true,
  },
  gender: {
      type: String,
      required: true,
  },
  date_of_birth: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true,
      lowercase: true,
  },
  password: {
      type: String,
      required: true,
  }
});

module.exports = mongoose.model("user", userschema);
