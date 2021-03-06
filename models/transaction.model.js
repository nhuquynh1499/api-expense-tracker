const mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({
  userId: String,
  groupId: String,
  amount: Number,
  note: String,
  time: String
})

module.exports = mongoose.model('transactions', transactionSchema)