import axios from "axios";

const API_URL = "http://localhost:8082/api/products/";

const addProduct = (product) => {
  return axios.post(API_URL + "add", product);
};

const getAllProducts = () => {
  return axios.get(API_URL + "all");
};

const getProductById = (id) => {
  return axios.get(API_URL + id);
};

const updateProduct = (id, product) => {
  return axios.put(API_URL + id, product);
};

const deleteProduct = (id) => {
  return axios.delete(API_URL + id);
};

const ProductService = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};

export default ProductService;
