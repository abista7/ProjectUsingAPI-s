const express = require('express');
const lesliesFunction = require('./leslie.js')
const app = express();

app.listen(3000)

app.get('/xposed', lesliesFunction)

app.get('*', (req, res) => {
    res.send('Hello World!')
})