const reportModel = require("../../models/report.model"); // Khai báo cấu hình Model

module.exports.index = async (req, res, next) => {
  // Hien thi tat ca database duoi dang json
  let reports;
  if (req.query.m && req.query.y) {
    reports = await reportModel.find({
      month: req.query.m,
      year: req.query.y,
    });
  } else {
    reports = await reportModel.find();
  }
  res.json(reports);
};

module.exports.create = async (req, res, next) => {
  // Them moi vao database.
  var reports = await reportModel.create(req.body);
  res.json(reports);
};
