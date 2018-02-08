const express = require('express');
const router = express.Router();
require('dotenv').config();

const CoinMarketCap = require('coinmarketcap-api');
const client = new CoinMarketCap();
let coinsData;

const DB_STORAGE = process.env.DB_STORAGE;
const DB_USER   = process.env.DB_USER;
const DB_PASS   = process.env.DB_PASS;

// DB connection
let mongoose   = require('mongoose');
mongoose.connect('mongodb://'+ DB_USER +':'+ DB_PASS + DB_STORAGE);

client.getTicker({limit: 0}).then(function (res) {
  coinsData = res;
});

/* GET api listing. */
router.route('/')
  .get((req, res) => {
    res.status(200).send(JSON.stringify({"error": 0, "errorMessage": "", "data": coinsData}));
  });
module.exports = router;
