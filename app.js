const express = require('express');
const dotenv = require("dotenv");
const morgan = require('morgan');
const cors = require('cors');
dotenv.config();

const app = express();

app.use(express.json())
app.use(morgan('dev'));
app.use(cors())


const routes = require('./src/routes')(app);

app.listen(process.env.SERVER_PORT, () => {
	console.log(`Working on http://localhost:${process.env.SERVER_PORT}`);
});
 