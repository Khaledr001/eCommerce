import Cookies from "js-cookie"
import { useMutation } from "react-query";
import Axios from "../axios";

export const useAuth = () => {
    // Function to execute
    const accessToken = Cookies.get('accessToken');
    // console.log(accessToken);
    return {
        accessToken,
    }
}

const logIn = (userData) => { 
    return Axios({
        method: 'POST',
        url: '/auth/login',
        data: userData
    }, { withCredentials: true });
}

const register = (userData) => { 
    return Axios({
        method: 'POST',
        url: '/users/register',
        data: userData,
    }, { withCredentials: true });
}

export const useUserLogin = () => { 
    return useMutation(logIn);
}

export const useUserRegister = () => { 
    return useMutation(register);
}