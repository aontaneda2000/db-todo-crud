const uuid = require("uuid"); //Nuevo producto
const Products = require("../models/products.models"); //Modelo

const getAllProducts = async () => {
  const data = Products.findAll();
  return data;
};

const createProduct = async (data) => {
  const newProduct = await Products.create({
    id: uuid.v4(),
    name: data.name,
    category: data.category,
    price: data.price,
    isAvailable: data.isAvailable,
  });
  return newProduct;
};

const getProductByid = async (id) => {
  const data = await Products.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const editProduct = async (id, data) => {
  const response = await Products.update(data, {
    where: {
      id,
    },
  });
  return response;
};

const deleteProduct = async (id) => {
  const data = await Movies.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  getAllProducts,
  createProduct,
  getProductByid,
  editProduct,
  deleteProduct,
};
