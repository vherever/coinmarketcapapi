let mongoose   = require('mongoose');
let Schema     = mongoose.Schema;

let CoinSchema = new Schema({
  data: Object
});

module.exports = mongoose.model('Coin', CoinSchema);
