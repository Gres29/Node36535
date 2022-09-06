const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
dotenv.config();

const {
  handleChatMessage,
  handleAllChat,
} = require(`${__dirname}/handlers/chat.handler`);
const booksRouter = require(`${__dirname}/routes/books.route`);
const db = require(`${__dirname}/db`);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 8080;

app.use(express.static("public"));
app.use(express.json());
db.connect();

app.use("/api/productos-test", booksRouter);

io.on("connection", (socket) => {
  handleAllChat(socket);
  handleChatMessage(socket, io);
});

server.listen(PORT, () => {
  console.log(`Corriendo en el puerto: ${PORT}. URL: http://localhost:${PORT}`);
});
