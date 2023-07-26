import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { axiosIntance } from "../../Api/config"
import {AxiosError} from "axios"
const LoginForn = () => {
    const navigate=useNavigate()
    const [LoginUser, setLoginUser] = useState({
        Username: "",
        Password: ""
    })
    console.log(LoginUser);


    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await axiosIntance.post("/user/login", { ...LoginUser })
            navigate("/")
            if(data.Adminlogincheck){
                console.log(data);
               navigate('/EducartDas')
            }

        } catch (error) {
            const err = error as AxiosError;
            const message = err.response?.data as {message:string}
            console.log(message.message);
            navigate("/sinup")

        }

    }
    return (
        <>
            <div className="w-80 h-10 p-1 border border-black rounded-lg mt-4 flex gap-9 ">
                <div className="w-9 h-8 ml-3 flex-row justify-between ">
                    <img className="w-full h-full" src="\Images\98dfdf3827082a15da731db63938da96.png" alt="Google Sign Up Image" />
                </div>
                <div className="w-64 h-8 p-1">
                    <h1  >Login With Google</h1>
                </div>
            </div>
            <div className=" w-full h-10 mt-1 p-1 flex-col" >
                <h1 className="text-black text-sm ml-10" >--  Or Login With Your Email -- </h1>
            </div>
            <div className=" w-full h-80 flex-col p-1">
                <form action="">
                    <div className=" w-full h-6 ">
                        <h1>Username</h1>
                    </div>
                    <div className="w-full h-10 mt-1 ">
                        <input className="w-full h h-full rounded-2xl border border-black p-2" type="text" name="Username" id="" placeholder="Enter Username" required onChange={(e) => setLoginUser({ ...LoginUser, [e.target.name]: e.target.value })} />
                    </div>
                    <div className=" w-full h-6 ">
                        <h1>Password</h1>
                    </div>
                    <div className="w-full h-10 mt-1 ">
                        <input className="w-full h h-full rounded-2xl border border-black p-2" type="password" name="Password" id="" placeholder="Enter Password" required onChange={(e) => setLoginUser({ ...LoginUser, [e.target.name]: e.target.value })} />
                    </div>
                    <div className=" w-full h-10 mt-4 justify-center items-center">
                        <button className="bg-black w-1/2 h-10 text-white ml-20 rounded-3xl" onClick={handleLoginSubmit} >Login</button>
                    </div>
                </form>
            </div>

        </>

    )
}

export default LoginForn