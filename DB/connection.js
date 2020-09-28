const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connect;