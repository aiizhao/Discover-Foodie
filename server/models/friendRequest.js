const mongoose = require("mongoose");

const FriendRequestSchema = new mongoose.Schema({
  sender: String,
  recipient: String,
});

// compile model from schema
module.exports = mongoose.model("friendRequest", FriendRequestSchema);