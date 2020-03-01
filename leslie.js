const keccak512 = require('js-sha3').keccak512
const axios = require('axios')
const errorMessage = require('./error.js')

const lesliesFunction = (req, res) => {
    if (req.query.password == null || req.query.password === "") {
        res.send(errorMessage(req))
        return
    }
    const hash = keccak512(req.query.password).substr(0, 10)
    axios.get('https://passwords.xposedornot.com/api/v1/pass/anon/' + hash)
        .then(response => {
            console.log(response.data.SearchPassAnon.count)
            res.send({
                status: 'OK',
                date: new Date(),
                param: req.query,
                response: 'this password has been seen in data breach ' + response.data.SearchPassAnon.count + ' times',
            })
        }).catch(e => {
            res.send({
                status: 'ERROR PASSWORD NOT FOUND',
                date: new Date(),
                param: req.query,
                response: 'this password is safe'
            })
        })
}

module.exports = lesliesFunction