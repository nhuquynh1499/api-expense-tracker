const groupModel = require('../models/group.model');
// const groupModel = require('../models/group.model');

module.exports.index = async (req, res) => {
  var groups = await groupModel.find();
  // var groups = await groupModel.find();
  res.render('./groups/index', {
    groups: groups
  });
}