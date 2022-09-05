const path = require("path");
const sqliteDB = require(path.join(__dirname, "..", "db/sqlite.db"));
const { checkTable, createMessagesTable } = require(path.join(
  __dirname,
  "..",
  "helpers/db.helper"
));

async function getAllChatDB() {
  const tableExists = await checkTable(sqliteDB, "messages");
  if (tableExists) {
    const chat = await sqliteDB.select().table("messages");
    return chat;
  } else {
    createMessagesTable(sqliteDB, "messages");
  }
}

async function addMessageDB(newMessage) {
  const tableExists = await checkTable(sqliteDB, "messages");
  if (tableExists) {
    const { message, date, email } = newMessage;
    await sqliteDB
      .insert({
        message,
        date,
        email,
      })
      .into("messages");
  } else {
    createMessagesTable(sqliteDB, "messages");
  }
}

module.exports = {
  getAllChatDB,
  addMessageDB,
};