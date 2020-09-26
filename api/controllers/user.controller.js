const userModel = require('../../models/user.model');

module.exports.index = async (req, res, next) => {
  var users = await userModel.find();
  res.json(users);
}

module.exports.create = async (req, res, next) => {
  var users = await userModel.create(req.body);
  res.json(users);
}