import { useMutation, useQuery } from "react-query";
import Axios from "../axios";

const getAllProducts = () => {
  return Axios({
    method: "GET",
    url: "/product/getall",
  });
};

const addProduct = (product) => {
  return Axios(
    {
      method: "POST",
      url: "/product/add",
      data: product,
    },
    { withCredentials: true }
  );
};

const deleteProduct = (id) => {
  return Axios(
    {
      method: "DELETE",
      url: `/product/${id}`,
    },
    { withCredentials: true }
  );
};

const updateProduct = (id, updatedProduct) => {
  return Axios(
    {
      method: "PUT",
      url: `/product/${id}`,
      data: updatedProduct,
    },
    { withCredentials: true }
  );
};

const getAProduct = (id) => {
  return Axios(
    {
      method: "GET",
      url: `/product/${id}`,
    },
    { withCredentials: true }
  );
};

export const useAddProduct = () => {
  return useMutation(addProduct);
};

export const useGetAllProducts = () => {
  return useQuery("getAllProducts", getAllProducts);
};

export const useUpdateProduct = () => {
  return useMutation(updateProduct);
};

export const useDeleteProduct = () => {
  return useMutation(deleteProduct);
};

export const useGetAProduct = () => {
  return useQuery('getAProduct', getAProduct);
}