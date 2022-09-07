const path = require("path");
const request = require("supertest");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const app = require(path.join(__dirname, "..", "app"));

describe("Products API", () => {
  it("Should get a list of products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Productos obtenidos con éxito");
    expect(response.body.formattedProducts).to.be.an("array");
  });
  it("Should add a new product", async () => {
    const newProduct = {
      id:5,
      name: "El Principito",
      description: "Novela de Antoine de Saint-Exupéry",
      price: 1800,
    };
    const response = await request(app)
      .post("/api/products")
      .send(newProduct)
      .set("Content-Type", "application/json");
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Productos agregado con éxito");
    expect(response.body.formattedProduct).to.be.an("object");
    expect(response.body.formattedProduct.name).to.equal(newProduct.name);
    expect(response.body.formattedProduct.description).to.equal(
      newProduct.description
    );
    expect(response.body.formattedProduct.price).to.equal(newProduct.price);
  });
  it("Should edit a product", async () => {
    const editedProduct = {
      id:5,
      name: "El Principito",
      description: "Novela de Antoine de Saint-Exupéry",
      price: 1800,
    };
    const response = await request(app)
      .put(`/api/products/${editedProduct.id}`)
      .send({
        name: editedProduct.name,
        description: editedProduct.description,
        price: editedProduct.price,
      })
      .set("Content-Type", "application/json");
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Producto modificado con éxito");
    expect(response.body.formattedProduct).to.be.an("object");
    expect(response.body.formattedProduct.name).to.equal(editedProduct.name);
    expect(response.body.formattedProduct.description).to.equal(
      editedProduct.description
    );
    expect(response.body.formattedProduct.price).to.equal(editedProduct.price);
  });
  it("Should soft delete a product", async () => {
    const response = await request(app)
      .delete(`/api/products/1`)
      .set("Content-Type", "application/json");
    expect(response.status).to.equal(200);
    expect(response.body.message).to.equal("Producto eliminado con éxito");
    expect(response.body.formattedProduct).to.be.an("object");
    expect(response.body.formattedProduct.active).to.be.false;
  });
});
