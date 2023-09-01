import axios, { AxiosError } from "axios"

const baseURL = import.meta.env.VITE_BASEURL as string;
const axiosIntance = axios.create({
    baseURL: baseURL
});
axiosIntance.interceptors.request.use(
    (config) => {
        const User =JSON.parse(localStorage.getItem("User") as string )
        if(User) {
        const AccessToken =User.AccessToken
        console.log(AccessToken);
        if(AccessToken){
            config.headers["Authorization"] = `Bearer ${AccessToken}`;
        }
    }
    const Mentor =JSON.parse(localStorage.getItem("Mentor") as string)
    if(Mentor){
        const MentorAccessToken=Mentor.AccessToken
        console.log(MentorAccessToken);
        if(MentorAccessToken){
            config.headers["Authorization"] = `MentorBearer ${MentorAccessToken}`
        }
    }
    const Admin = JSON.parse(localStorage.getItem("Admin") as string)
    if(Admin){
        const AdminAccessToken = Admin.AdminAccessToken
        console.log(AdminAccessToken,"AdminAcesstoken");
        if(AdminAccessToken){
            config.headers["Authorization"] = `AdminBearer ${AdminAccessToken}`
        }
    }
     return config
    },
    (error:AxiosError)=>{
        return Promise.reject(error)
    }
);

export { axiosIntance }; 