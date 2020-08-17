const transactionModel = require('../../models/transaction.model'); // Khai báo cấu hình Model

module.exports.index = async (req, res, next) => { 
  // Hien thi tat ca database duoi dang json
  const dateQuery = req.query.y + '-' + (req.query.m > 9 ? req.query.m : '0' + req.query.m) + '-' + req.query.d; 
  if (!req.query.y) {
    let transactions = await transactionModel.find();
    res.json(transactions);
  } else {
    let transactions = await transactionModel.find({ time: dateQuery });
    res.json(transactions);
  }

}


module.exports.create = async (req, res, next) => {
	// Them moi vao database.
  var transactions = await transactionModel.create(req.body);
  res.json(transactions);
}