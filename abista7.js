const axios = require('axios');
const errorMessage = require('./error.js')
const openCageApiKey = '93436822ece84058b8bcedfab7954719';
const openCageApi = 'https://api.opencagedata.com/geocode/v1/json?key=93436822ece84058b8bcedfab7954719&q=Oakland';

const abista7Function = (req, res) => {
    if (req.query.city == null || req.query.city == '') {
        res.send(errorMessage(req))
        return
    }
    const city = req.query.city;
    let customJSON = {
        "date": new Date(),
        "status": "",
        "params": {
            "city": city
        },
        "response": "",
    };

    axios.get('https://api.opencagedata.com/geocode/v1/json?key=93436822ece84058b8bcedfab7954719&q=' + city)
        .then(function(ocRes) {
            let lat = ocRes.data.results[0].geometry.lat;
            let lng = ocRes.data.results[0].geometry.lng;
            //console.log(long);

            axios.get('https://api.darksky.net/forecast/290ad7e6aedbcdfcc5052a74c0e61417/' + lat + ',' + lng)
                .then(function(dsRes) {
                    customJSON.status = "OK";
                    customJSON.response = dsRes.data.currently.temperature + " degrees";
                    res.json(customJSON);
                })
                .catch(function(error) {
                    console.log(error);
                    customJSON.status = "ERROR";
                    res.json(customJSON);

                });

            //console.log(ocRes.data.results[0].geometry);
        })
        .catch(function(err) {
            console.log(err);
            customJSON.status = "ERROR";
            res.json(customJSON);
        })
};

module.exports = abista7Function