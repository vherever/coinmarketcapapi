const mongoose = require('mongoose'),
  Coin = mongoose.model('Coin');

const coinsData = require('../data/coins.json');

exports.findAll = function(req, res){
  Coin.find({}, function(err, results) {
    if (err) {
      return res.send(err);
    }
    return res.send(results);
  });
};

exports.findById = function(req, res){
  let id = req.params.id;
  Coin.findOne({'_id':id}, function(err, result) {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
};

exports.update = function(req, res) {
  let id = req.params.id;
  let updates = req.body;

  Coin.update({'_id':id}, updates, function (err, numberAffected, raw) {
    if (err) {
      return res.send(err)
    }
    console.log('Updated %d coin', numberAffected);
    return res.send(raw);
  });
};

exports.add = function(req, res) {
  Coin.create(req.body, function (err, coin) {
    if (err) {
      return res.send(err);
    }
    return res.send(coin);
  });
};

exports.delete = function(req, res){
  let id = req.params.id;
  Coin.remove({'_id':id}, function(err, info) {
    if (err) {
      return res.send(err);
    }
    return res.send(info);
  });
};

exports.deleteAll = function(req, res){
  Coin.remove({}, function(err, info) {
    if (err) {
      return res.send(err);
    }
    return res.send(info);
  });
};

exports.import = function(req, res){
  Coin.create(
      coinsData
    , function (err, data) {
      if (err) {
        return res.send(err);
      }
      // return res.sendStatus(200);
          return res.send(data);
    });
};
