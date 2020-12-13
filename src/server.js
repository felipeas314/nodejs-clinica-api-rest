process.env.NODE_CONFIG_DIR = `${__dirname}/app/config`;

const express = require("express");
const cors = require('cors');

const routes = require("./routes");
require("./app/database/postgresql");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', routes);

exports.App = app;
