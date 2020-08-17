const mongoose = require('mongoose');

var groupSchema = new mongoose.Schema({
  name: String,
  icon: String,
  type: Number, // 1 - khoản thu, 0 - khoản chi, 2 - vay/nợ
  addSum: Boolean
})

module.exports = mongoose.model('groups', groupSchema)