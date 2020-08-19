const transactionModel = require("../../models/transaction.model"); // Khai báo cấu hình Model

module.exports.index = async (req, res, next) => {
  // Hien thi tat ca database duoi dang json
  let transactions = await transactionModel.find();
  const day = req.query.d;
  const month = req.query.m;
  const year = req.query.y;
  let dateQuery
  if (req.query.y) {
    if (req.query.d)
      dateQuery =
        year + "-" + (month > 9 ? month : "0" + month) + "-" + day;
    else
      dateQuery =
        year + "-" + (month > 9 ? month : "0" + month);

    transactions = transactions.filter((item) => {
      return item.time.indexOf(dateQuery) !== -1;
    });
  }
  res.json(transactions);
};

// module.exports.filterGroup = async (req, res, next) => {
//   let transactions = await transactionModel.find({ groupId: req.params.id });
//   const dateQuery =
//     req.query.y +
//     "-" +
//     (req.query.m > 9 ? req.query.m : "0" + req.query.m)
//   if (req.query.m) {
//     transactions = transactions.filter((item) => {
//       return item.time.indexOf(dateQuery) !== -1;
//     })
//   }
//   res.json(transactions);
// };

module.exports.create = async (req, res, next) => {
  // Them moi vao database.
  var transactions = await transactionModel.create(req.body);
  res.json(transactions);
};
