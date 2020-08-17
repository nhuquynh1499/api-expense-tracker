const mongoose = require('mongoose');

var timeSchema = new mongoose.Schema({
  date: Date,
  listTransaction: Array,
  sumAmount: Number
})

module.exports = mongoose.model('times', timeSchema)