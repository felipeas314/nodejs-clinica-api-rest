const express = require("express");

const routes = require("./routes");

require("./config/mongoose");

class Express {
  constructor() {
    this.app = express();
    this.routes();
    this.middlewares();
  }

  routes() {
    this.app.use(routes);
  }

  middlewares() {
    this.app.use(express.json());
  }
  
}

module.exports = new Express().app;
