const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  // Main or Sub
  menuType: {
    type: String,
    required: true
  },
  displayText: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  }
});

module.exports = Menu = mongoose.model("menu", MenuSchema);
