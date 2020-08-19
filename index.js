require('dotenv').config();

const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const connect =require('./DB/connection');
const apiGroupRoute = require('./api/routes/group.route');
const apiTransactionRoute = require('./api/routes/transaction.route');
const apiPlanRoute = require('./api/routes/plan.route');
const apiReportRoute = require('./api/routes/report.route');

connect().then(() => {
  console.log('Connect success');
}).catch(console.log);

const app = express()
const port = 8080

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/group', apiGroupRoute);
app.use('/api/transaction', apiTransactionRoute);
app.use('/api/planning', apiPlanRoute);
app.use('/api/report', apiReportRoute);

app.listen(port, () => 
	console.log(`Example app listening at http://localhost:${port}`)
)