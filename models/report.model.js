const mongoose = require('mongoose');

var reportSchema = new mongoose.Schema({
  groupId: String,
  month: Number,
  year: Number,
  beginningBalance: Number,
  endingBalance: Number,
  usedMoney: Number,
  earnedMoney: Number
})

module.exports = mongoose.model('reports', reportSchema)