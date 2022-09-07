const http = require("http");

const app = require(`${__dirname}/app`);
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Client ready at: http://localhost:${PORT}`);
});
