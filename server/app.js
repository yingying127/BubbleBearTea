const { models: { Drink, Topping } } = require('./db');
const express = require('express')
const path = require('path')

const app = express();
app.use(express.json())

app.use('/dist', express.static(path.join(__dirname, '../dist')))

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


module.exports = app;