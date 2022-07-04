const fs = require("fs");

const chat = fs.readFileSync("data/chat.json");
const parsedChat = JSON.parse(chat);

module.exports = parsedChat;