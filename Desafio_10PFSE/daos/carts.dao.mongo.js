const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  products: [],
  active: Boolean,
  timestamp: String,
});

const Cart = mongoose.model("Cart", cartSchema);
function addOne() {
  try {
    const cart = new Cart({
      active: true,
      timestamp: new Date().toLocaleString("es-AR"),
    });

    cart.save();

    return cart;
  } catch (error) {
    throw "Hubo un error al crear el carrito";
  }
}

async function getOne(id) {
  try {
    const cart = await Cart.findById(id);
    return cart;
  } catch (error) {
    throw "Hubo un error al traer el carrito";
  }
}

async function deleteOne(id) {
  try {
    const softDeletedCart = await Cart.findByIdAndUpdate(
      id,
      {
        active: false,
      },
      {
        new: true,
      }
    );
    return softDeletedCart;
  } catch (error) {
    throw "Hubo un error al borrar el carrito";
  }
}

async function addManyProducts(id, products) {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      id,
      { $push: { products: { $each: products } } },
      {
        new: true,
      }
    );
    return updatedCart;
  } catch (error) {
    throw "Hubo un error al agregar porductos al carrito";
  }
}

async function deleteOneProduct(cart_id, product_id) {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      cart_id,
      { $pull: { products: { id: product_id } } },
      {
        new: true,
      }
    );
    return updatedCart;
  } catch (error) {
    throw "Hubo un error al eliminar el producto del carrito";
  }
}

module.exports = {
  addOne,
  getOne,
  deleteOne,
  addManyProducts,
  deleteOneProduct,
};
