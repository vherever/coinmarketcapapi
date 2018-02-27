const mongoose = require('mongoose'),
  Coin = mongoose.model('Coin');

const CoinMarketCap = require('coinmarketcap-api');
const client = new CoinMarketCap();
let coinsData;

exports.getCoinsDataAPI = function (req, res) {
  client.getTicker({limit: 0}).then(function (res) {
    coinsData = res;
  });
  res.status(200).send(JSON.stringify({"error": 0, "errorMessage": "", "data": coinsData}));
};
