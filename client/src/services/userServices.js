import Axios from "../axios";
import Cookies from "js-cookie";

const updateUser = async (updatedData, id) => {
  try {
    const url = `/users/update/${id}`;
    console.log(url);
    const accessToken = Cookies.get("accessToken");
    //   const accessToken = localStorage.getItem("access_token");
    console.log(accessToken);
    const response = await Axios(
      {
        method: "put",
        url: url,
        data: updatedData,
        headers: {
          accessToken: accessToken,
        },
      },
      {
        withCredentials: true,
      }
    );
    const data = response.data;
    console.log(data);
    const {user} = data.payload;
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

const userServices = { updateUser };

export default userServices;
