import { useMutation, useQuery } from "react-query";
import Axios from "../axios";

const getAllUsers = () => {
  return Axios(
    {
      method: "GET",
      url: "/users/allusers",
    },
    { withCredentials: true }
  );
};

const createAUser = (formData) => {
  return Axios(
    {
      method: "POST",
      url: "/users/register",
      data: formData,
    },
    { withCredentials: true }
  );
};

const updateAUser = (id, formData) => {
  return Axios(
    {
      method: "PUT",
      url: `/users/update/${id}`,
      data: formData,
    },
    { withCredentials: true }
  );
};
const deleteAUser = (id) => {
  return Axios(
    {
      method: "DELETE",
      url: `/users/delete/${id}`,
    },
    { withCredentials: true }
  );
};

const getAUserById = (id) => {
  return Axios(
    {
      method: "GET",
      url: `/users/${id}`,
    },
    { withCredentials: true }
  );
};
const getAUserByEmail = (email) => {
  return Axios(
    {
      method: "GET",
      url: `/users`,
      params: {
        email: email,
      },
    },
    { withCredentials: true }
  );
};

export const useGetAllUsers = () => {
  return useQuery("getAllUsers", getAllUsers);
};

export const useCreateAUser = () => {
  return useMutation(createAUser);
};

export const useUpdateAUser = () => {
  return useMutation(updateAUser);
};

export const useDeleteAUser = () => {
  return useMutation(deleteAUser);
};

export const useGetAUserById = () => {
  return useQuery("getAUserById", getAUserById);
};

export const useGetAUserByEmail = () => {
  return useQuery("getAUserByEmail", getAUserByEmail);
};
