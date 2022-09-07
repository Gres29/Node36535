const path = require("path");
const productsRequests = require(path.join(
  __dirname,
  "..",
  "requests/products.axios.requests"
));

async function show() {
  const products = await productsRequests.httpGetAllProducts();
  console.log(products);
  const addedProduct = await productsRequests.httpPostNewProduct();
  console.log(addedProduct);
  const updated = await productsRequests.httpPutUpdateProduct();
  console.log(updated);
  const deleted = await productsRequests.httpDeleteProduct();
  console.log(deleted);
}

module.exports = {
  show,
};
