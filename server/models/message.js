const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  sender: {
    _id: String,
    name: String,
  },
  recipient: {
    _id: String,
    name: String,
  },
  timestamp: { type: Date, default: Date.now },
  content: String,
});

// compile model from schema
module.exports = mongoose.model("message", MessageSchema);
