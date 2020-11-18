const mongoose = require("mongoose");

const modelUser = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  who: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    default: "Wed",
  },
  doneTime: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("taskData", modelUser);
