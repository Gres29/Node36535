const mariaDB = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.MARIADB_HOST,
    port: process.env.MARIADB_PORT,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
  },
});

module.exports = mariaDB;