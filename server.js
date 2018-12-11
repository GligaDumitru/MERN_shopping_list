const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//bodyparser middleware

app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongoaas

mongoose.connect(db)
    .then(() => console.log("MongoDB Connnected.."))
    .catch(err => console.log(err));

//Use routes

app.use('/api/items', items);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server is listening at ${port}`));
