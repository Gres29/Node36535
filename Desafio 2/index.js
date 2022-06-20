const fs = require("fs/promises");
const { Libro } = require(`./Classes/Libro`);
const { Container } = require(`./Classes/Container`);

const init = async () => {
  const container = new Container(`./products.txt`, fs);
  const hasContent = await container.initialize();
  if (!hasContent) {
    const libroPoe = new Libro(
      1,
      `El Gato Negro`,
      750.00,
      `https://octaedro.com/wp-content/uploads/2019/04/12435-1.jpg`,
      `Edgar Alan Poe`,
      1843
    );

    const libro2Rowling = new Libro(
      2,
      `Harry Potter y La Piedra Filosofal`,
      2700.00,
      `https://static.wikia.nocookie.net/esharrypotter/images/9/9a/Harry_Potter_y_la_Piedra_Filosofal_Portada_Espa%C3%B1ol.PNG/revision/latest?cb=20151020165725`,
      `J.K.Rowling`,
      1997
    );
  }
};

init();