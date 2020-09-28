const userModel = require('../../models/user.model');

const jwt = require('jsonwebtoken');

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  await userModel.findOne({ email: email})
          .then(user => {
            if (!user) {
              return res.status(404).send({message: 'No user found'});
            }
            if (user.password !== password) {
              return res.status(404).send({message: 'Incorrect email or password'});
            }
            const token = jwt.sign({ userId: user.id }, process.env.SECRETKEY);
            res.status(200).json({
              userId: user.id,
              token: token
            })
          })
          .catch(err => res.status(400).send({message:'Invalid username or password'}));
}