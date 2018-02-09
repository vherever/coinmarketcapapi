'use strict';

// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');
const getCoinsDataAPI = require('./server/routes/getCoinsDataAPI');
const getCoinsDataDB = require('./server/routes/getCoinsDataDB');
const postCoinsDataDB = require('./server/routes/postCoinsDataDB');

const app = express();

// Parsers for POST data
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// use database
require('./server/db/index');

// Set our api routes
app.use('/api', api);

app.use('/api/getCoinsDataAPI', getCoinsDataAPI);
app.use('/api/getCoinsDataDB', getCoinsDataDB);
app.use('/api/postCoinsDataDB', postCoinsDataDB);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '8080';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
