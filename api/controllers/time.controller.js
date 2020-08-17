const timeModel = require('../../models/time.model'); // Khai báo cấu hình Model

module.exports.index = async (req, res, next) => { 
	// Hien thi tat ca database duoi dang json
  var times = await timeModel.find();
  res.json(times);
}

module.exports.create = async (req, res, next) => {
	// Them moi vao database.
  var times = await timeModel.create(req.body);
  res.json(times);
}