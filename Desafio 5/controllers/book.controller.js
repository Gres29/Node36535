const books = require("../models/book.model");

function getAll(request, response) {
  const booksReady = books.length ? books : false;
  response.render(`home.handlebars`, {
    booksReady,
  });
}

function getAllPug(request, response) {
  response.render(`index.pug`, {
    title: `Productos`,
    esLista: true,
    books: books,
  });
}

function getAllEJS(request, response) {
  response.render(`index.ejs`, {
    title: `Productos`,
    esLista: true,
    esFormulario: false,
    books: books,
  });
}
function getNewBookFormPug(request, response) {
  try {
    response.status(200).render(`index.pug`, {
      title: "Productos",
      esFormulario: true,
    });
  } catch (error) {
    response.status(400).json({
      message: `Hubo un error al traer el formulario para un nuevo libro`,
    });
  }
}

function getNewBookFormHandleBars(request, response) {
  try {
    response.status(200).render(`formulario.nuevo.book.handlebars`);
  } catch (error) {
    response.status(400).json({
      message: `Hubo un error al traer el formulario para un nuevo libro`,
    });
  }
}

function getNewBookFormEJS(request, response) {
  try {
    response.status(200).render(`index.ejs`, {
      title: "Productos",
      esFormulario: true,
      esLista: false,
    });
  } catch (error) {
    response.status(400).json({
      message: `Hubo un error al traer el formulario para un nuevo libro`,
    });
  }
}

function determineRedirect(engine, response) {
  if (engine === "ejs") {
    response.status(201).redirect(`/ejs/`);
  } else if (engine === "handlebars") {
    response.status(201).redirect(`/handlebars/`);
  } else {
    response.status(201).redirect(`/pug/`);
  }
}
function add(request, response) {
  try {
    const newBookRequest = request.body;
    const {
      "book-author": author,
      "book-name": name,
      "book-price": price,
      "book-img": img,
      "book-publication-year": publication_year,
      "template-engine": engine,
    } = newBookRequest;

    const newBook = {
      name: name,
      price: price,
      img: img,
      author: author,
      publication_year: publication_year,
    };
    books.push(newBook);
    determineRedirect(engine, response);
  } catch (error) {
    response.status(404).json({
      message: `Hubo un error al ingresar el libro`,
    });
  }
}

module.exports = {
  getAll,
  getAllPug,
  getAllEJS,
  add,
  getNewbookFormPug,
  getNewbookFormHandleBars,
  getNewbookFormEJS,
};