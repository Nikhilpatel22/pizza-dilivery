const express = require('express');

const path = require('path');
const ejs = require('ejs');
//const expressLayouts = require('express-ejs-layouts');
const app = express();
require('./app/config/database/conn');

//app.use(expressLayouts)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/resources/views'))

require('./routes/web')(app)


 

module.exports = app;
