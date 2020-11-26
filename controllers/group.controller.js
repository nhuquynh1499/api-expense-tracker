const groupModel = require('../models/group.model');

module.exports.index = async (req, res) => {
  const groups = await groupModel.find();
  res.render('./groups/index', {
    groups: groups
  });
}

module.exports.create = async (req, res) => {
  res.render("./groups/create");
}

module.exports.delete = async (req, res) => {
  await userModel.remove({ _id: req.params.id }).exec();
  res.redirect("/group");
}

module.exports.update = async (req, res) => {
  const group = await groupModel.findOne({ _id: req.params.id });
  res.render("./groups/update", {
    group: group
  });
}