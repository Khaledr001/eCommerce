import axios from "axios";

const Axios = axios.create({
    baseURL: 'http://localhost:6001/api',
    headers: {},
});

export default Axios;