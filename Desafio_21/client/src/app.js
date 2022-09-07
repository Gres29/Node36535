const express = require("express");
const app = express();
const productsRequestsResults = require(`${__dirname}/results/products.axios.results`);

productsRequestsResults.show();

module.exports = app;
