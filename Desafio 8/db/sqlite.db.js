const path = require("path");
const dbPath = path.join(__dirname, "ecommerce.db");
const sqliteDB = require("knex")({
  client: "sqlite3",
  connection: {
    filename: dbPath,
  },
  useNullAsDefault: true,
});

module.exports = sqliteDB;