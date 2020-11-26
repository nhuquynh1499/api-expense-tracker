require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const connect =require('./DB/connection');
const userRoute = require('./routes/user.route');
const transactionRoute = require('./routes/transaction.route');
const groupRoute = require('./routes/group.route');
const loginRoute = require('./routes/auth.route');
const apiGroupRoute = require('./api/routes/group.route');
const apiTransactionRoute = require('./api/routes/transaction.route');
const apiPlanRoute = require('./api/routes/plan.route');
const apiReportRoute = require('./api/routes/report.route');
const apiUserRoute = require('./api/routes/user.route');
const apiLoginRoute = require('./api/routes/login.route');

connect().then(() => {
  console.log('Connect success');
}).catch(console.log);

const app = express()
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('./index');
})
app.use('/user', userRoute);
app.use('/transaction', transactionRoute);
app.use('/group', groupRoute);
app.use('/login', loginRoute);
app.use('/api/group', apiGroupRoute);
app.use('/api/transaction', apiTransactionRoute);
app.use('/api/planning', apiPlanRoute);
app.use('/api/report', apiReportRoute);
app.use('/api/user', apiUserRoute);
app.use('/api/login', apiLoginRoute);

app.listen(port, () => 
	console.log(`Example app listening at http://localhost:${port}`)
)