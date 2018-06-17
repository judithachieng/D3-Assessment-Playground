// Initialize dot env.
require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Get MVC structure and add it to middleware
const Router = require("./routes");

const PORT = process.env.PORT;

// parse application/json
app.use(bodyParser.json());

app.use(Router);

app.listen(PORT, (req, res) => {
  console.log(`Simple Express API running on port ${PORT}`);
});

module.exports = app;
