const chatController = require("../controllers/chats.controller");

function handleAllChat(socket) {
  socket.on("get-chat", () => {
    chatController.getChat(socket);
  });
}

function handleChatMessage(socket, io) {
  socket.on("chat-message", async (message) => {
    const chatMessage = {
      email: message.email,
      message: message.text,
      date: new Date().toLocaleString("es-AR"),
    };
    await chatController.add(chatMessage, io);
  });
}

module.exports = { handleChatMessage, handleAllChat };