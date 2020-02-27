const express = require('express');
const errorMessage = require('./error.js')
const lesliesFunction = require('./leslie.js')
const abista7Function = require('./abista7.js')
const app = express();

app.listen(3000)

app.get('/xposed', lesliesFunction)
app.get('/abista7', abista7Function)

app.get('*', (req, res) => {
    res.send(errorMessage(req))
})