const express = require('express')
const keccak512 = require('js-sha3').keccak512
const axios = require('axios')
const app = express()
app.use(express.json())

app.listen(3000)

app.get('/xposed', (req,res) => {
    const hash = keccak512(req.query.password).substr(0,10)
    console.log(hash);
    axios.get('https://passwords.xposedornot.com/api/v1/pass/anon/' + hash)
    .then(response => {
        console.log(response.data.SearchPassAnon.count)
        res.send('this password has been seen in data breach ' + response.data.SearchPassAnon.count + ' times')
    }).catch(e => res.send('this password is safe'))
})

app.get('*', (req, res) => {
	res.send('Hello World!')
})