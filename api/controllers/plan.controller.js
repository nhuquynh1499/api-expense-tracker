const planModel = require("../../models/plan.model"); // Khai báo cấu hình Model

module.exports.index = async (req, res, next) => {
  // Hien thi tat ca database duoi dang json
  var plans;
  if (req.params.userId) {
    plans = await planModel.find({ userId: req.params.userId});
  } else {
    plans = await planModel.find();
  }
  res.json(plans);
};

module.exports.create = async (req, res, next) => {
  // Them moi vao database.
  var plans = await planModel.create(req.body);
  res.json(plans);
};

module.exports.update = async (req, res, next) => {
  const { time, groupId, amount, userId } = req.body;
  const plans = await planModel.find({ userId: userId, groupId: groupId });
  if (plans.length > 0) {
    const plan = plans.find((plan) => {
      const getTimeOfTransaction = new Date(time).getTime();
      const getTimeDateStart = new Date(plan.dateStart).getTime();
      const getTimeDateEnd = new Date(plan.dateEnd).getTime();

      if (
        getTimeOfTransaction >= getTimeDateStart &&
        getTimeOfTransaction <= getTimeDateEnd
      )
        return true;
      else return false;
    });
    if (plan) {
      await planModel.updateOne(
        { _id: plan._id },
        { $set: { amount: Number(plan.amount) + Number(amount) } }
      );
    }
  }
  res.json(req.body);
};
