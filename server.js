const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//bodyparser middleware

app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//DB Config
const db = require("./config/keys").mongoURI;

// Connect to Mongoaas

mongoose
  .connect(process.env.MONGODB_URI || db)
  .then(() => console.log("MongoDB Connnected.."))
  .catch(err => console.log(err));

//Use routes

app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is listening at ${port}`));
