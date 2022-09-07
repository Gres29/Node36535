const path = require("path");
const mariaDB = require(path.join(__dirname, "..", "db/maria.db"));
const { checkTable, createBooksTable } = require(path.join(
  __dirname,
  "..",
  "helpers/db.helper"
));

async function getAllDB() {
  const tableExists = await checkTable(mariaDB, "books");
  if (tableExists) {
    const books = await mariaDB.select().table("books");
    return books;
  } else {
    createBooksTable(mariaDB, "books");
  }
}

async function addDB(book) {
  const tableExists = await checkTable(mariaDB, "books");
  if (tableExists) {
    await mariaDB("books").insert(book);
  } else {
    createBooksTable(mariaDB, "books");
  }
}

module.exports = {
  getAllDB,
  addDB,
};
