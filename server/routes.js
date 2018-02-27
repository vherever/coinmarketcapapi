module.exports = function(app){

  let coins = require('./controllers/coin');
  let api = require('./controllers/api');

  app.get('/coins', coins.findAll);
  app.get('/coins/:id', coins.findById);
  app.put('/coins/:id', coins.update);
  app.post('/coins', coins.add);
  app.delete('/coins/:id', coins.delete);
  app.delete('/deleteAll', coins.deleteAll);
  app.get('/import', coins.import);

  app.get('/api/getCoinsDataAPI', api.getCoinsDataAPI);

};
