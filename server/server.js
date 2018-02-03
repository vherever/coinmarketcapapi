'use strict';

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
//app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

require('./cmc')(app);

//
// HTTP-static
//
app.use(express.static('./'));

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('App listening on port ' + PORT);
  console.log('Press Ctrl+C to quit.');
});
