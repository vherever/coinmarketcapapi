const mongoose = require('mongoose'),
  Coin = mongoose.model('Coin');

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
      {
          "data": [
              {
                  id: "bitcoin",
                  name: "Bitcoin",
                  symbol: "BTC",
                  rank: "1",
                  price_usd: "10306.1",
                  price_btc: "1.0",
                  "24h_volume_usd": "7155080000.0",
                  market_cap_usd: "174046963948",
                  available_supply: "16887762.0",
                  total_supply: "16887762.0",
                  max_supply: "21000000.0",
                  percent_change_1h: "0.5",
                  percent_change_24h: "8.51",
                  percent_change_7d: "-7.44",
                  last_updated: "1519668570"
              },
              {
                  id: "ethereum",
                  name: "Ethereum",
                  symbol: "ETH",
                  rank: "2",
                  price_usd: "874.478",
                  price_btc: "0.0855141",
                  "24h_volume_usd": "2003680000.0",
                  market_cap_usd: "85575675986.0",
                  available_supply: "97859153.0",
                  total_supply: "97859153.0",
                  max_supply: null,
                  percent_change_1h: "0.74",
                  percent_change_24h: "4.88",
                  percent_change_7d: "-7.71",
                  last_updated: "1519668553"
              },
              {
                  id: "ripple",
                  name: "Ripple",
                  symbol: "XRP",
                  rank: "3",
                  price_usd: "0.956507",
                  price_btc: "0.00009354",
                  "24h_volume_usd": "466350000.0",
                  market_cap_usd: "37394451960.0",
                  available_supply: "39094802192.0",
                  total_supply: "99992622540.0",
                  max_supply: "100000000000",
                  percent_change_1h: "0.22",
                  percent_change_24h: "3.25",
                  percent_change_7d: "-16.63",
                  last_updated: "1519668541"
              },
              {
                  id: "bitcoin-cash",
                  name: "Bitcoin Cash",
                  symbol: "BCH",
                  rank: "4",
                  price_usd: "1251.3",
                  price_btc: "0.122363",
                  "24h_volume_usd": "483131000.0",
                  market_cap_usd: "21258101081.0",
                  available_supply: "16988813.0",
                  total_supply: "16988813.0",
                  max_supply: "21000000.0",
                  percent_change_1h: "1.08",
                  percent_change_24h: "7.12",
                  percent_change_7d: "-18.44",
                  last_updated: "1519668553"
              },
              {
                  id: "litecoin",
                  name: "Litecoin",
                  symbol: "LTC",
                  rank: "5",
                  price_usd: "223.848",
                  price_btc: "0.0218898",
                  "24h_volume_usd": "1405280000.0",
                  market_cap_usd: "12399149604.0",
                  available_supply: "55390933.0",
                  total_supply: "55390933.0",
                  max_supply: "84000000.0",
                  percent_change_1h: "0.62",
                  percent_change_24h: "5.0",
                  percent_change_7d: "-0.35",
                  last_updated: "1519668541"
              }
          ]
    }
    , function (err, data) {
      if (err) {
        return res.send(err);
      }
      // return res.sendStatus(200);
          return res.send(data);
    });
};
