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
//New Route..
app.get('/todo/new', (req, res) => {
    res.render('new.ejs')
})

//Update Route..
app.put('/todo/:id', (req,res) => {
    tasks[req.params.id] = req.body;
    res.redirect('/todo')
})

//CREATE Route..
app.post('/todo', (req, res) => {
    tasks.push(req.body);
    res.redirect('/todo')
})

//EDIT Route..
app.get('/todo/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        task: tasks[req.params.id],
        index: req.params.id
    })

    res.redirect('/todo');
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