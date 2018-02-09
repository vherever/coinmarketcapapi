const express = require('express');
const router = express.Router();
require('dotenv').config();

let Coin = require('../../server/models/coin');

/* GET api listing. */
router.route('/')
  .post((req, res) => {
    let coin = new Coin();
    coin.data = req.body;

    coin.save((err) => {
      if (err) {
        res.send(err);
      }
      res.status(200).send(JSON.stringify({"error": 0, "errorMessage": "", "data": coin.data}));
    });
  });

module.exports = router;
