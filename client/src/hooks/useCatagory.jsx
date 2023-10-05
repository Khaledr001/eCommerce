import { useQuery } from "react-query";
import Axios from "../axios";

const getAllCatagory = () => {
  return Axios({
    method: "GET",
    url: "/catagory/getall",
  });
};

export const useGetAllCatagory = () => {
  return useQuery("getAllCatagory", getAllCatagory);
};
