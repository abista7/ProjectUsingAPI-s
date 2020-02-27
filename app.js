const express = require('express');
const lesliesFunction = require('./leslie.js')
const abista7Function = require('./abista7.js')
const ahmadsFunction = require('./ahmad.js')
const app = express();

app.listen(3000)

app.get('/skyscanner', ahmadsFunction)
app.get('/xposed', lesliesFunction)
app.get('/abista7', abista7Function)

app.get('*', (req, res) => {
    res.send('Express Masters HW1')
})