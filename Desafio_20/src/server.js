const http = require("http");
const path = require("path");
require("dotenv").config();
const app = require(`${__dirname}/app.js`);
const MongoClient = require(path.join(__dirname, "/daos/mongo.client"));
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

const mongoDB = new MongoClient();
mongoDB.connect();

server.listen(PORT, () => {
  console.log(`App ready at: http://localhost:${PORT}`);
});
