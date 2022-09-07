const path = require("path");
const http = require("http");

const app = require(path.join(__dirname, "app.js"));

const server = http.createServer(app);
const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
