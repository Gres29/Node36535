const path = require("path");
const ProductsService = require(path.join(
  __dirname,
  "..",
  "services/products.service"
));
const ProductsDto = require(path.join(__dirname, "..", "dtos/products.dto"));
const productServiceInstance = new ProductsService();

async function getAll(request, response) {
  try {
    const products = await productServiceInstance.getAll();
    const formattedProducts = products.map(
      ({ id, name, description, price }) => {
        const formattedProduct = new ProductsDto(id, name, description, price);
        return formattedProduct;
      }
    );
    return response.status(200).json({
      message: "Productos obtenidos con éxito",
      formattedProducts,
    });
  } catch (error) {
    return response.status(404).json({
      message: "Hubo un error al obtener los productos",
    });
  }
}

async function save(request, response) {
  try {
    const newProduct = request.body;
    const savedProduct = await productServiceInstance.save(newProduct);
    const { id, name, description, price } = savedProduct;
    const formattedProduct = new ProductsDto(id, name, description, price);
    return response.status(200).json({
      message: "Productos agregado con éxito",
      formattedProduct,
    });
  } catch (error) {
    return response.status(404).json({
      message: "Hubo un error al guardar el nuevo producto",
    });
  }
}

async function update(request, response) {
  try {
    const id = Number(request.params.id);
    const newProductData = request.body;
    const updatedProduct = await productServiceInstance.update(
      id,
      newProductData
    );
    const { name, description, price } = updatedProduct;
    const formattedProduct = new ProductsDto(id, name, description, price);
    return response.status(200).json({
      message: "Producto modificado con éxito",
      formattedProduct,
    });
  } catch (error) {
    return response.status(404).json({
      message: "Hubo un error al modificar el producto",
    });
  }
}

async function softDelete(request, response) {
  try {
    const id = Number(request.params.id);
    const deletedProduct = await productServiceInstance.softDelete(id);
    const { name, description, price, active } = deletedProduct;
    const formattedProduct = new ProductsDto(
      id,
      name,
      description,
      price,
      active
    );
    return response.status(200).json({
      message: "Producto eliminado con éxito",
      formattedProduct,
    });
  } catch (error) {
    return response.status(404).json({
      message: "Hubo un error al eliminar el producto",
    });
  }
}

module.exports = {
  getAll,
  save,
  update,
  softDelete,
};
