const reportModel = require("../../models/report.model"); // Khai báo cấu hình Model

module.exports.index = async (req, res, next) => {
  // Hien thi tat ca database duoi dang json
  let reports;
  if (req.query.m && req.query.y) {
    reports = await reportModel.findOne({
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
  const { month, year, groupId, amount } = req.body;
  var report = await reportModel.findOne({
    month: month,
    year: year,
  });
  if (report) {
    let { listOutflow, usedMoney, earnedMoney, listInflow } = report;
    if (amount < 0) {
      const listGroup = Object.keys(listOutflow);
      const listAmount = Object.values(listOutflow);
      const index = listGroup.indexOf(groupId);
      listOutflow = Object.assign(listOutflow, {
        [groupId]:
          Number(index !== -1 ? listAmount[index] : 0) + Number(amount),
      });
      usedMoney = usedMoney + Number(amount);
      await reportModel.updateOne(
        { month: month, year: year },
        { $set: { listOutflow: listOutflow, usedMoney: usedMoney } }
      );
    } else {
      if (typeof listInflow === undefined) {
        listInflow = { [groupId]: Number(amount) };
        earnedMoney = Number(amount);
      } else {
        const listGroup = Object.keys(listInflow);
        const listAmount = Object.values(listInflow);
        const index = listGroup.indexOf(groupId);
        listInflow = Object.assign(listInflow, {
          [groupId]:
            Number(index !== -1 ? listAmount[index] : 0) + Number(amount),
        });
        earnedMoney = earnedMoney + Number(amount);
      }
      await reportModel.updateOne(
        { month: month, year: year },
        { $set: { listInflow: listInflow, earnedMoney: earnedMoney } }
      );
    }
  } else {
    if (amount < 0) {
      const listOutflow = { [groupId]: amount };
      await reportModel.create({
        month: month,
        year: year,
        beginningBalance: 0,
        endingBalance: 0,
        usedMoney: amount,
        earnedMoney: 0,
        listOutflow: listOutflow,
        listInflow: {},
      });
    } else {
      const listInflow = { [groupId]: amount };
      await reportModel.create({
        month: month,
        year: year,
        beginningBalance: 0,
        endingBalance: 0,
        usedMoney: 0,
        earnedMoney: amount,
        listOutflow: {},
        listInflow: listInflow,
      });
    }
  }
  // var reports = await reportModel.create(req.body);
  res.json(report);
};
