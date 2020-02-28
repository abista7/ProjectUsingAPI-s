const axios = require("axios");
const ahmadsFunction = (req, res) => {
    axios({
            "method": "GET",
            "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2020-12-01",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "b4d2b2e30fmshce06cba50a79ad8p1327fcjsn8932f92991ac"
            }
        })
        .then((response) => {
            //console.log(response)
            let quotes = ''
            response.data.Quotes.forEach(element => {
                quotes = quotes + '\n' + JSON.stringify(element)
            });
            res.send({
                status: "OK",
                date: new Date(),
                response: "the response is" + quotes,
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = ahmadsFunction;