const mongoose = require("mongoose");

var reportSchema = new mongoose.Schema({
  month: Number,
  year: Number,
  beginningBalance: Number,
  endingBalance: Number,
  usedMoney: Number,
  earnedMoney: Number,
  listOutflow: { type: Object, default: {} },
  listInflow: { type: Object, default: {} }
});

module.exports = mongoose.model("reports", reportSchema);
