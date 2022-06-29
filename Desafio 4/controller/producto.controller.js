const productos = require("../model/producto.model");
function getAll(request, response) {
  try {
    response.status(200).json({
      message: "Se han encontrado los productos",
      productos,
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al listar los productos",
    });
  }
}

function getOne(request, response) {
  try {
    const id = Number(request.params.id);
    const producto = getById(id);

    if (!producto) {
      return response.status(404).json({
        message: "Producto no encontrado",
      });
    }

    response.status(200).json({
      message: "Se ha encontrado el producto",
      producto,
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al buscar el producto",
    });
  }
}

function add(request, response) {
  try {
    const newProducto = request.body;
    newProducto.id = autoIncrementId();
    newProducto.active = true;
    productos.push(newProducto);
    response.status(201).json({
      message: "Producto agregado correctamente",
      newProducto,
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al crear el producto",
    });
  }
}

function getMaxId() {
  return Math.max(...productos.map(({ id }) => id + 1));
}

function autoIncrementId() {
  const nextId = productos.length ? getMaxId() : 1;
  return nextId;
}

function getById(id) {
  return productos.find((producto) => producto.id === id);
}

function update(request, response) {
  try {
    const id = Number(request.params.id);
    const newDatos = request.body;
    newDatos.id = id;
    const productoIndex = productos.findIndex((producto) => producto.id === id);
    productos.splice(productoIndex, 1, newDatos);
    response.status(200).json({
      message: "Se ha modificado el producto exitosamente",
      newDatos,
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al modificar el producto",
    });
  }
}

function softDelete(request, response) {
  try {
    const id = Number(request.params.id);
    const producto = getById(id);
    producto.active = false;
    response.status(200).json({
      message: "Se ha borrado el producto exitosamente",
      producto,
    });
  } catch (error) {
    response.status(404).json({
      message: "Hubo un error al borrar el producto",
    });
  }
}

module.exports = {
  getAll,
  getOne,
  add,
  update,
  softDelete,
};