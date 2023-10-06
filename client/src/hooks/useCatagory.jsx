import { useMutation, useQuery } from "react-query";
import Axios from "../axios";

const getAllCatagory = () => {
  return Axios({
    method: "GET",
    url: "/catagory/getall",
  });
};

const getACatagory = (slug) => {
  return Axios(
    {
      method: "GET",
      url: `/catagory/getall/${slug}`,
    },
    { withCredentials: true }
  );
};

const addCatagory = (catagoryData) => {
  return Axios(
    {
      method: "POST",
      url: "/catagory/add",
      data: catagoryData,
    },
    { withCredentials: true }
  );
};

const updateCatagory = (slug, catagoryData) => {
  return Axios(
    {
      method: "PUT",
      url: `/catagory/update/${slug}`,
      data: catagoryData,
    },
    { withCredentials: true }
  );
};

const deleteCatagory = (slug) => {
  return Axios(
    {
      method: "DELETE",
      url: `/catagory/delete/${slug}`,
    },
    { withCredentials: true }
  );
};

export const useGetAllCatagory = () => {
  return useQuery("getAllCatagory", getAllCatagory);
};

export const useGetACatagory = () => {
  return useQuery("getACatagory", getACatagory);
};

export const useAddCatagory = () => {
  return useMutation(addCatagory);
};

export const useUpdateCatagory = () => {
  return useMutation(updateCatagory);
};

export const useDeleteCatagory = () => {
  return useMutation(deleteCatagory);
};
