import Axios from "../axios";
import Cookies from "js-cookie";

const TOKEN_KEY = "accessToken";
const loginUrl = import.meta.env.VITE_USER_LOGIN;

const _clearCredentials = () => {
  delete Axios.defaults.headers.common["Authorization"];
  Cookies.remove(TOKEN_KEY);
};

const LogIn = async (formData) => {
  try {
    // console.log(loginUrl);
    // console.log(formData);
    // Axios post request
    const response = await Axios(
      {
        method: "post",
        url: "/auth/login",
        data: formData,
      },
      {
        withCredentials: true,
      }
    );

    const {user, accessToken} = response.data.payload;
    console.log(user, accessToken);

    // set access token to cookies and set user to local storage
    if (accessToken) {
      Axios.defaults.headers.common["Authorization"] = accessToken;
      Cookies.set(TOKEN_KEY, accessToken);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      _clearCredentials();
    }
    //    window.location.reload();
  } catch (error) {
    alert("Login failed!!");
  }
};

const isUserLoggedIn = () => Boolean(Cookies.get(TOKEN_KEY));

const performLogout = () => {
  _clearCredentials();
  window.location.reload();
};

const authServices = { LogIn, isUserLoggedIn, performLogout };

export default authServices;
