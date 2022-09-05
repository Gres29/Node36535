const { getAllChatDB, addMessageDB } = require("../models/chat.model");

async function getChat(socket) {
  const chat = await getAllChatDB();
  socket.emit("chat", chat);
}

async function add(message, io) {
  io.emit("chat-message-ui", message);
  await addMessageDB(message);
}

module.exports = {
  getChat,
  add,
};