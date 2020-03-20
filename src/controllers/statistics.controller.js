const { getStatsByLocationId } = require('../services/statistics.service')

const handleGetStatsByLocationId = async (req, res) => {
    res.status(200).send(await getStatsByLocationId(req.params.locationId));
}

module.exports = {
    handleGetStatsByLocationId
}