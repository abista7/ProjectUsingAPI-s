const express = require('express');
const errorMessage = require('./error.js')
const lesliesFunction = require('./leslie.js')
const abista7Function = require('./abista7.js')
const ahmadsFunction = require('./ahmad.js')
const sanjay417Function = require('./sanjay417.js')
const app = express();

app.listen(3000)

app.get('*', (req, res) => {
    res.send('Express Masters HW1')
app.get('/app/skyscanner', ahmadsFunction)
app.get('/app/xposed', lesliesFunction)
app.get('/app/abista7', abista7Function)
app.get('/app/sanjay417', sanjay417Function)

app.get('*', (req, res) => {
    res.send(errorMessage(req))
})