const express = require('express');
const errorMessage = require('./error.js')
const lesliesFunction = require('./leslie.js')
const abista7Function = require('./abista7.js')
const sanjay417Function = require('./sanjay417.js')
const app = express();

app.listen(3000)

app.get('/app/xposed', lesliesFunction)
app.get('/app/abista7', abista7Function)
app.get('/app/sanjay417', sanjay417Function)

app.get('*', (req, res) => {
    res.send(errorMessage(req))
})