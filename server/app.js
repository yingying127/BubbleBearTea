const { models: { Drink, Topping } } = require('./db');
const express = require('express');
const app = express();
const path = require('path')

app.use(express.json())

app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.use(express.static(path.join(__dirname, "..", "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
}); 

app.get('/api/drinks', async(req, res, next) => {
    try {
        res.status(201).send(await Drink.findAll())
    }
    catch(ex) {
        next(ex)
    }
})

app.get('/api/toppings', async(req, res, next) => {
    try {
        res.status(201).send(await Topping.findAll())
    }
    catch(ex) {
        next(ex)
    }
})

module.exports = app;