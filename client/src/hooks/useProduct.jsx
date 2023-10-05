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

export const useAddProduct = () => { 
  return useMutation(addProduct);
}

export const useGetAllProducts = () => {
  return useQuery("getAllProducts", getAllProducts);
};
