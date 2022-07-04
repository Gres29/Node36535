const chat = require("../models/chat.model");

function getChat(socket) {
  socket.emit("chat", chat);
}

function add(message, socket, io) {
  io.emit("chat-message-ui", message);
}

module.exports = {
  getChat,
  add,
};