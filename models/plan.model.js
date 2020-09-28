const mongoose = require('mongoose');

var planSchema = new mongoose.Schema({
  userId: String,
  groupId: String,
  goal: Number,
  amount: Number,
  dateStart: String,
  dateEnd: String
})

module.exports = mongoose.model('plans', planSchema)