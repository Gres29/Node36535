const express = require("express");
const { engine } = require("express-handlebars");

const app = express();
const PORT = 8080;

const ejsRouter = require(`${__dirname}/routes/ejs.route`);
const handlebarsRouter = require(`${__dirname}/routes/handlebars.route`);
const pugRouter = require(`${__dirname}/routes/pug.route`);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", engine());
app.set("view engine", "ejs");
app.set("view engine", "handlebars");
app.set("view engine", "pug");

app.set("views", `${__dirname}/views`);

app.use(`/ejs`, ejsRouter);
app.use(`/handlebars`, handlebarsRouter);
app.use(`/pug`, pugRouter);

app.listen(PORT, () => {
  console.log(`Escuchando en puerto: ${PORT}. Web: http://localhost:${PORT}`);
});

module.exports = app;