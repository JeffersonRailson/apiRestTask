const express = require("express");
const nunjucks = require("nunjucks");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

class App {
  constructor() {
    this.express = express();
    this.isDev = process.env.NODE_ENV === "production";
    this.database();
    this.middlewares();
    this.routes();
  }
  database() {
    mongoose.connect("mongodb://localhost:27017/projeto", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  }
  middlewares() {
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(methodOverride("_method"));
    nunjucks.configure("src/views", {
      autoescape: true,
      express: this.express,
      watch: true
    });
    this.express.set("view engine", "njk");
  }
  routes() {
    this.express.use(require("./routes"));
  }
}
module.exports = new App().express;
