const axios = require("axios");
const errorMessage = require('./error.js')
const ahmadsFunction = (req, res) => {
    if (req.query.airport == null || req.query.airport == '') {
        res.send(errorMessage(req))
        return
    }
    const destinationAirport = req.query.airport;
    axios({
            "method": "GET",
            "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/"+destinationAirport+"-sky/2020-12-01",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "b4d2b2e30fmshce06cba50a79ad8p1327fcjsn8932f92991ac"
            }
        })
    .then((response) => {
        let quotes = 0
        console.log(response.data);
        
        response.data.Quotes.forEach(element => {
            quotes = element.MinPrice;
        });
        res.send({
            status: "OK",
            date: new Date(),
            response: "The lowest flight price from SFO to "+destinationAirport+" on December 1st 2020 is: " + quotes +" USD",
        })
    })
    .catch((error) => {
        console.log(error)
    })
}
module.exports = ahmadsFunction;