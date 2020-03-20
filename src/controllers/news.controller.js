const { getNews } = require('../services/news.service')

const handleGetNews = (req, res) => {
    res.status(200).send(getNews());
}

module.exports = {
    handleGetNews
}