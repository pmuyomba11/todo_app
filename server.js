const express = require('express');
require('dotenv').config();
const colors = require('colors');
const morgan = require('morgan');
const tasks = require('./models/tasks')
const PORT = process.env.PORT;
const methodOverride = require('method-override');
//Intialization....
const app = express();

//Middleware....
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));

//ROUTES..

//Index Route..
app.get('/todo', (req, res) => {
    res.render('index.ejs', {
        allTasks: tasks
    } )
})


//Show Route...
app.get('/todo/:id', (req, res) => {
    res.render('show.ejs', {
        task: tasks[req.params.id]
    })
})
//Listeners
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`Server is Running on PORT: ${PORT}...`.inverse.blue);
    console.log('====================================');
})