require('dotenv').config();

const DB_STORAGE = process.env.DB_STORAGE;
const DB_USER   = process.env.DB_USER;
const DB_PASS   = process.env.DB_PASS;

// DB connection
let mongoose   = require('mongoose');
mongoose.connect('mongodb://'+ DB_USER +':'+ DB_PASS + DB_STORAGE);
