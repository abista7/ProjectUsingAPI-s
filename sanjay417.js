const fetch = require("node-fetch");
const errorMessage = require('./error.js');
const main = (req, res) => {
    if (req.query.symbol == null || req.query.symbol == '') {
        res.send(errorMessage(req))
        return
    }

    const sym = req.query.symbol;
    console.log(sym);

    const URL1 = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='
    const URL2 = '&interval=5min&apikey=7OY2F2ZGXZNO98B6'

    const URL = URL1 + sym + URL2;
    console.log(URL)

    fetch(URL)
        .then((response) => {

            return (response.json());
        }).then((myjson) => {

            console.log(myjson);
            const todaysdate = new Date()

            const tdate = myjson['Meta Data']['3. Last Refreshed']
            console.log(tdate)
            const stdata = myjson['Time Series (5min)'][tdate]['1. open'];
            console

            const reobj = {

                status: "OK",
                date: todaysdate.toLocaleString(),
                params: req.query,
                response: "The opening price for " + sym + " on " + todaysdate.toLocaleString() + " is " + stdata
            }

            console.log(reobj);
            res.send(reobj);

        }).catch((error) => {

            console.log(error);
            const reobj = {

                status: "ERROR",
                date: new Date().toLocaleString(),
                params: req.query,
                response: error
            }
            console.log(reobj);
            res.send(reobj);

        });
}

module.exports = main;