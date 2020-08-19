const planModel = require('../../models/plan.model'); // Khai báo cấu hình Model

module.exports.index = async (req, res, next) => { 
	// Hien thi tat ca database duoi dang json
  var plans = await planModel.find();
  res.json(plans);
}

module.exports.create = async (req, res, next) => {
	// Them moi vao database.
  var plans = await planModel.create(req.body);
  res.json(plans);
}