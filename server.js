const express = require('express');
require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const PORT = process.env.PORT;
const methodOverride = require('method-override');
//Intialization....
const app = express();

//Middleware....
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

//RROUTES..



//Listeners
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server is Running on PORT: ${PORT}...`.inverse.blue);
    console.log('====================================');
})