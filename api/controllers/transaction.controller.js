const transactionModel = require("../../models/transaction.model"); // Khai báo cấu hình Model

module.exports.index = async (req, res, next) => {
  let transactions = [];
  if (req.params.userId) {
    transactions = await transactionModel.find({ userId: req.params.userId });
  } else {
    transactions = await transactionModel.find();
  }
  const day = req.query.d;
  const month = req.query.m;
  const year = req.query.y;
  let dateQuery;
  if (req.query.y) {
    if (req.query.d)
      dateQuery = year + "-" + (month > 9 ? month : "0" + month) + "-" + day;
    else dateQuery = year + "-" + (month > 9 ? month : "0" + month);

    transactions = transactions.filter((item) => {
      return item.time.indexOf(dateQuery) !== -1;
    });
  }
  res.json(transactions);
};

module.exports.create = async (req, res, next) => {
  // Them moi vao database.
  var transactions = await transactionModel.create(req.body);
  res.json(transactions);
};
