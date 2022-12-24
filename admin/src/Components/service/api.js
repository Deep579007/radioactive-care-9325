import axios from "axios";
export const URL = "http://localhost:8085";
export const addUser = async (data) => {
  try {
    const user = await axios.post(`${URL}/add`, data);
    return user;
  } catch (error) {
    console.log("Error While Calling AddUser Api");
  }
};

export const getUsers = async () => {
  try {
    const getData = await axios.get(`${URL}/users`);
    return getData;
  } catch (error) {
    console.log("Error While Calling getUsers Api");
  }
};

export const getUser = async (id) => {
  try {
    id = id || "";
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error While Calling getUser Api");
  }
};
export const editUser = async (user, id) => {
  try {
    return await axios.patch(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error While Calling edituser Api");
  }
};
export const deleteUsers = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error While Calling deleteuser Api");
  }
};
// =======================================PRODUCTS SERVICES =======================

export const addProduct = async (data) => {
  try {
    const product = await axios.post(`${URL}/addproduct`, data);
    return product;
  } catch (error) {
    console.log("Error While Calling AddUser Api");
  }
};

export const getProducts = async () => {
  try {
    const getProduct = await axios.get(`${URL}/products`);
    return getProduct;
  } catch (error) {
    console.log("Error While Calling getUsers Api");
  }
};

export const getProduct = async (id) => {
  try {
    id = id || "";
    return await axios.get(`${URL}/${id}`);
  } catch (error) {
    console.log("Error While Calling getUser Api");
  }
};
export const editProduct = async (user, id) => {
  try {
    return await axios.patch(`${URL}/${id}`, user);
  } catch (error) {
    console.log("Error While Calling edituser Api");
  }
};
export const deleteProduct = async (id) => {
  try {
    return await axios.delete(`${URL}/${id}`);
  } catch (error) {
    console.log("Error While Calling deleteuser Api");
  }
};
