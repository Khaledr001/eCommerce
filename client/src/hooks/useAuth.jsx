import Cookies from "js-cookie"

export const useAuth = () => {
    // Function to execute
    const accessToken = Cookies.get('accessToken');
    // console.log(accessToken);
    return {
        accessToken,
    }
}