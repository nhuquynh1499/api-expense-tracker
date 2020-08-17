const groupModel = require('../../models/group.model'); // Khai báo cấu hình Model

module.exports.index = async (req, res, next) => { 
	// Hien thi tat ca database duoi dang json
  var groups = await groupModel.find();
  res.json(groups);
}

module.exports.create = async (req, res, next) => {
	// Them moi vao database.
  var groups = await groupModel.create(req.body);
  res.json(groups);
}