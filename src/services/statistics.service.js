const http = require('../config/http-client');
const { URL_COVID_API_GET_STATS_BY_LOCATION_ID } = require('../config/api-consts');

const getStatsByLocationId = id => {
    return http
        .get(URL_COVID_API_GET_STATS_BY_LOCATION_ID(id))
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error)
        })
}

module.exports = {
    getStatsByLocationId
}