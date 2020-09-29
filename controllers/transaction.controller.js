const transactionModel = require('../models/transaction.model');
// const groupModel = require('../models/group.model');

module.exports.index = async (req, res) => {
  var transactions = await transactionModel.find();
  // var groups = await groupModel.find();
  res.render('./transactions/index', {
    transactions: transactions
  });
}