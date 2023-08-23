import Axios from "axios";

const AxiosInstance = Axios.create({ baseURL: `http://localhost:8080/api/v1` });


export default AxiosInstance;