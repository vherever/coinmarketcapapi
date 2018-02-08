const express = require('express');
const router = express.Router();
require('dotenv').config();

const DB_STORAGE = process.env.DB_STORAGE;
const DB_USER   = process.env.DB_USER;
const DB_PASS   = process.env.DB_PASS;

// DB connection
let mongoose   = require('mongoose');
mongoose.connect('mongodb://'+ DB_USER +':'+ DB_PASS + DB_STORAGE);

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
