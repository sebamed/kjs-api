const { getTips } = require('../services/tips.service')

const handleGetTips = (req, res) => {
    res.status(200).send(getTips());
}

module.exports = {
    handleGetTips
}