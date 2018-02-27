module.exports = function(app){

  let coins = require('./controllers/coin');
  let api = require('./controllers/api');

  app.get('/getCoinsDataDB', coins.findAll);
  app.get('/coins/:id', coins.findById);
  app.put('/coins/:id', coins.update);
  app.post('/postCoinsDataDB', coins.add);
  app.delete('/removeCoinDataById/:id', coins.delete);
  app.delete('/removeAllCoinsData', coins.deleteAll);
  app.get('/importCoinsData', coins.import);

  app.get('/api/getCoinsDataAPI', api.getCoinsDataAPI);

};
