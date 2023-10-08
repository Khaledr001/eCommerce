import { useMutation, useQuery } from "react-query";
import Axios from "../axios";

const createOrder = ({id, orderDetails}) => {
  return Axios(
    {
      method: "POST",
      url: `/order/create/${id}`,
      data: orderDetails,
    },
    { withCredentials: true }
  );
};

const getAllOrder = () => {
  return Axios(
    {
      method: "GET",
      url: `/order/all`,
    },
    { withCredentials: true }
  );
};

const getAllOrderOfAUser = () => {
  return Axios(
    {
      method: "GET",
      url: `/order/user/all`,
    },
    { withCredentials: true }
  );
};

const getAOrderById = (id) => { 
    return Axios({
        method: "GET",
        url: `/order/${id}`,
    }, {withCredentials: true});
}

export const useGetAOrderById = () => { 
    return useQuery('getAOrderById', getAOrderById);
}

export const useGetAllOrderOfAUser = () => {
  return useQuery("getAllOrderOfAUser", getAllOrderOfAUser);
};

export const useGetAllOrder = () => {
  return useQuery("getAllOrder", getAllOrder);
};

export const useCreateOrder = () => {
  return useMutation(createOrder);
};
