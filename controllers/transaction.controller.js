const transactionModel = require('../models/transaction.model');
const groupModel = require('../models/group.model');

module.exports.index = async (req, res) => {
  var transactions = await transactionModel.find();
  var groups = await groupModel.find();

  transactions.map((transaction) => {
    groups.forEach((group) => {
      if (String(transaction.groupId) === String(group._id)) {
        transaction.groupId = group.name
      }
    })
    return transaction
  })

  res.render('./transactions/index', {
    transactions: transactions
  });
}

module.exports.delete = async (req, res) => {
  await transactionModel.remove({ _id: req.params.id }).exec();
  res.redirect("/user");
}