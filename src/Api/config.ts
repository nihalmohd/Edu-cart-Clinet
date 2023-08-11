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
            config.headers["UserAuthorization"] = `Bearer ${AccessToken}`;
        }
    }


    const Mentor =JSON.parse(localStorage.getItem("Menror") as string)
    if(Mentor){
        const MentorAccessToken=Mentor.AccessToken
        if(MentorAccessToken){
            config.headers["MentorAuthorization"] = `Bearer ${MentorAccessToken}`
        }
    }

    const Admin = JSON.parse(localStorage.getItem("Admin") as string)
    if(Admin){
        const AdminAccessToken = Admin.AdminAccessToken
        if(AdminAccessToken){
            config.headers["AdminAuthorization"] = `Bearer ${AdminAccessToken}`
        }
    }
     return config
    },
    (error:AxiosError)=>{
        return Promise.reject(error)
    }
);

export { axiosIntance };