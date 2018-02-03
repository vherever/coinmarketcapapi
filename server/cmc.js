module.exports = function(app){
  // HardCode

  const ajaxResponse = {
    data: {
      "name": "CoinMarketCapDataAnalyzer",
      "version": "0.0.1",
      "author": "vherever"
    }
  };

  //
  // HTTP-request methods
  //


  app.get('/getData', function(req, res) {
    res.status(200).send(JSON.stringify({"error": 0, "errorMessage": "", "data": ajaxResponse}));
  });

};
