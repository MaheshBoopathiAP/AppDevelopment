import axios from "axios";

const API_URL = "http://localhost:8082/api/dashboard/";

const addProduct = (product) => {
  return axios.post(API_URL + "add", product);
};

const getAllProducts = () => {
  return axios.get(API_URL + "all");
};

const getProductById = (id) => {
  return axios.get(API_URL + id);
};



const DashboardService = {
  addProduct,
  getAllProducts,
  getProductById,

};

export default DashboardService;
