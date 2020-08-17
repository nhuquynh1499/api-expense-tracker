const transactionModel = require('../../models/transaction.model'); // Khai báo cấu hình Model

module.exports.index = async (req, res, next) => { 
	// Hien thi tat ca database duoi dang json
  var transactions = await transactionModel.find();
  res.json(transactions);
}

module.exports.create = async (req, res, next) => {
	// Them moi vao database.
  var transactions = await transactionModel.create(req.body);
  res.json(transactions);
}