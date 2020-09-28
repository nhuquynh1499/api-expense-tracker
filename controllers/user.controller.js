const userModel = require('../models/user.model');

module.exports.index = async (req, res) => {
  var users = await userModel.find();
  res.render('./users/index', {
    users: users
  });
}