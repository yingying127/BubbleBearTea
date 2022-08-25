const { models: { MilkTea, FruitTea, CheeseCap, Slush, Toppings }, models} = require('./db');
const express = require('express')
const path = require('path')

const app = express();
app.use(express.json())

app.use('/dist', express.static(path.join(__dirname, '../dist')))

module.exports = app;