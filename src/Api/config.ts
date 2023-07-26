import axios from "axios"

const baseURL = import.meta.env.VITE_BASEURL as string;

const axiosIntance  = axios.create({
    baseURL : baseURL
});

export { axiosIntance };