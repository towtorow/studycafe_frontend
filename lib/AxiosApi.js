import qs            from "query-string";
import AxiosInstance from "./AxiosInstance";

// GET 통신
export const axiosGet = (url, param) => {
    return AxiosInstance.get(url + "?" + qs.stringify(param));
}

// POST 통신
export const axiosPost = (url, param) => {
    return AxiosInstance.post(url, param);
}

// PUT 통신
export const axiosPut = (url, param) => {
    return AxiosInstance.put(url, param);
}