// Required package
const express = require('express');
const { join } = require('path');
const dbs = require(join(__dirname, 'dbs.js'));

//DB connect
dbs();

//startup settings:
const app = express();

// Variables
const PORT = process.env.PORT || 5000;
const BACKEND_URL = process.env.BACKEND_URL || 'http://127.0.0.1:5000';

//Middleware
app.use(express.json());

//router test
const mainRouter = require(join(__dirname, 'routes', 'mainRouter.js'));
const addRouter = require(join(__dirname, 'routes', 'addRouter.js'));
const deleteRouter = require(join(__dirname, 'routes', 'deleteRouter.js'));
const editRouter = require(join(__dirname, 'routes', 'editRouter.js'));

//routers
app.use('/', mainRouter);
app.use('/add', addRouter);
app.use('/edit', editRouter);
app.use('/delete', deleteRouter);

//Port settings
app.listen(PORT, () => {
  console.log(`Server is running on ${BACKEND_URL}`);
});
