const userModel = require('../models/user.model');
const planModel = require('../models/plan.model');
const transactionModel = require('../models/transaction.model');
const reportModel = require('../models/report.model');

module.exports.index = async (req, res) => {
  var users = await userModel.find();
  res.render('./users/index', {
    users: users
  });
}

module.exports.delete = async (req,res) => {
  const userId = req.params.id
  await userModel.remove({ _id: userId }).exec();
  await planModel.remove({ userId: userId }).exec();
  await transactionModel.remove({ userId: userId }).exec();
  await reportModel.remove({ userId: userId }).exec();
  res.redirect("/user");
}