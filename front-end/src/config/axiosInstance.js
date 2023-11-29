import axios from "axios";
import { BASEURL } from "../Constants/baseUrl";

const AxiosInstance = axios.create({
    baseURL:BASEURL
})

AxiosInstance.interceptors.request.use(function(config){
    const token = localStorage.getItem('token')
    config.headers['Authorization']='Bearer ' +token
    config.headers['Access-control-Allow-Orgin']='*'
    return config
})

export default AxiosInstance;