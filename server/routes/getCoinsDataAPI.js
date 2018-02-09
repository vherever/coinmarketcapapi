const express = require('express');
const router = express.Router();
require('dotenv').config();

const CoinMarketCap = require('coinmarketcap-api');
const client = new CoinMarketCap();
let coinsData;

client.getTicker({limit: 0}).then(function (res) {
  coinsData = res;
});

/* GET api listing. */
router.route('/')
  .get((req, res) => {
    res.status(200).send(JSON.stringify({"error": 0, "errorMessage": "", "data": coinsData}));
  });

module.exports = router;
