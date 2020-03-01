const axios = require("axios");
const errorMessage = require('./error.js')
const ahmadsFunction = (req, res) => {
    if (req.query.city == null || req.query.city == '') {
        res.send(errorMessage(req))
        return
    }
    const destinationCity = req.query.city;
    axios({
            "method": "GET",
            "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/"+destinationCity+"/2020-12-01",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "b4d2b2e30fmshce06cba50a79ad8p1327fcjsn8932f92991ac"
            }
        })
    .then((response) => {
        let quotes = ''
        response.data.Quotes.forEach(element => {
            quotes = quotes + JSON.stringify(element.MinPrice);
        });
        res.send({
            status: "OK",
            date: new Date(),
            response: "The lowest flight price is: " + quotes +" USD",
        })
    })
    .catch((error) => {
        console.log(error)
    })
}
module.exports = ahmadsFunction;