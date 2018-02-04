const express = require('express');
const router = express.Router();

const ajaxResponse = {
  data: {
    "name": "CoinMarketCapDataAnalyzer",
    "version": "0.0.1",
    "author": "vherever"
  }
};

const CoinMarketCap = require('coinmarketcap-api');


const client = new CoinMarketCap();

// client.getTicker({limit: 3}).then(console.log).catch(console.error);
// client.getTicker({limit: 1, currency: 'bitcoin'}).then(console.log).catch(console.error);
// client.getTicker({convert: 'EUR'}).then(console.log).catch(console.error);
// client.getTicker({}).then(console.log).catch(console.error);

// function getCoinsData() {
//   return client.getTicker({limit: 3}).then(console.log).catch(console.error);
// }
let coinsData;
client.getTicker({limit: 0}).then(function (res) {
  coinsData = res;
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.status(200).send(JSON.stringify({"error": 0, "errorMessage": "", "data": coinsData}));
});

module.exports = router;
