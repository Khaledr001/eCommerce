import Axios from "../axios"
import { useMutation, useQuery } from "react-query";

const addAddress = (address) => {
    return Axios({
        method: 'POST',
        url: 'user/address/add',
        data: address
    }, {withCredentials: true});
}

const getAllAddress = () => {
    return Axios({
        method: 'GET',
        url: 'user/address/all',
    }, {withCredentials: true});
}

const updateAnAddress = (id, addressInfo) => { 
    return Axios({
        method: 'PUT',
        url: `user/address/update/${id}`,
        data: addressInfo,
    }, {withCredentials: true});
}

const deleteAnAddress = (id) => {
    return Axios({
        method: 'DELETE',
        url: `user/address/delete/${id}`,
    }, {withCredentials: true});
}

export const useDeleteAnAddress = () => { 
    return useMutation(deleteAnAddress);
}

export const useUpdataAnAddress = () => {
    return useMutation(updateAnAddress);
}

export const useGetAllAddress = () => {
    return useQuery('getAllAddress', getAllAddress);
}

export const useAddAddress = () => {
    return useMutation(addAddress);
}