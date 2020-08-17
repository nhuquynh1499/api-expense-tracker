const mongoose = require("mongoose");

const URL = "mongodb+srv://" + process.env.MONGODB_USERNAME + ":" + 
						process.env.MONGODB_PASSWORD +"@cluster0-kuqyf.mongodb.net/expenseTracker?retryWrites=true&w=majority";
const connect = async () => {
  await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};

module.exports = connect;