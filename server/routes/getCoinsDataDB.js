const express = require('express');
const router = express.Router();
require('dotenv').config();

let Coin = require('../../server/models/coin');

/* GET api listing. */
router.route('/')
  .get((req, res) => {
    Coin.find((err, data) => {
      if (err) {
        res.send(err);
      }
      res.json(data[data.length - 1].data);
    })
  });

module.exports = router;
