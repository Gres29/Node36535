const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");
dotenv.config();

const {
  handleChatMessage,
  handleAllChat,
} = require(`${__dirname}/handlers/chat.handler`);
const booksRouter = require(`${__dirname}/routes/books.route`);
const loginRouter = require(`${__dirname}/routes/login.route`);
const homeRouter = require(`${__dirname}/routes/home.route`);
const logoutRouter = require(`${__dirname}/routes/logout.route`);
const db = require(`${__dirname}/db`);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 8080;

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_ATLAS_CREDENTIALS,
    }),
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 600000 },
    secret: "Hola!",
  })
);

app.use(express.json());
db.connect();

app.use("/login", loginRouter);
app.use("/home", homeRouter);
app.use("/logout", logoutRouter);
app.use("/api/productos-test", booksRouter);

io.on("connection", (socket) => {
  handleAllChat(socket);
  handleChatMessage(socket, io);
});

server.listen(PORT, () => {
  console.log(`Corriendo en el puerto: ${PORT}. URL: http://localhost:${PORT}`);
});
