import { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import {AxiosError,AxiosResponse} from "axios"
import { axiosIntance } from "../../Api/config";

interface ApiError {
  message: string;
}


const AdminLoginForm = () => {
  const navigate = useNavigate()
  const [err, seterr] = useState<string|null>(null)
  const [AdminEmail, setAdminEmail] = useState({
    Email: "",
    Password: "",
  })
  const handleAdminLogin = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const {data} = await axiosIntance.post("/admin/Login", { ...AdminEmail }) as AxiosResponse;
      console.log(data)
      const {AdminAccessToken,Adminlogincheck} = data
      const AdminDatas={
        AdminAccessToken,
        Adminlogincheck
    }
    localStorage.setItem("Admin",JSON.stringify(AdminDatas))
      navigate("/Educart/EducartDash")
    } catch (error) {
      const errormsg = error as AxiosError;
      const message = errormsg.response?.data as ApiError
      console.log(message.message); 
      seterr(message.message)
        navigate("/Educart/EducartLogin")
    }
  }
  const handleError=()=>{
    seterr(null)
  }
  console.log(err);
  return (
    <div>
      <div className=" w-full h-full flex justify-center p-5" >
        <div className="sm:w-full md:w-2/5 flex justify-center items-center sm:mt-36 ">
          <div className= "  sm:w-full md: w-10/12 h-4/5 bg-gray-200 shadow-2xl border  border-black">
            <div className="  flex flex-col justify-center items-center p-3">
              <h1 className="text-xl font-bold mb-4">Welcome to Educart...!</h1>
              <div className=" w-full h-60 flex-col mb-6">
                <form action="submit">
                  <div className=" w-full h-6 ">
                    <h1>Email</h1>
                  </div>
                  <div className="w-full h-10 mt-1 ">
                    <input className="w-full h h-full rounded-2xl border border-black p-2" type="Email" name="Email" id="" placeholder="Enter Email Address" required onInput={handleError} onChange={(e) => setAdminEmail({ ...AdminEmail, [e.target.name]: e.target.value })} />
                  </div>
                  <div className=" w-full h-6 ">
                    <h1>Password</h1>
                  </div>
                  <div className="w-full h-10 mt-1 ">
                    <input className="w-full h h-full rounded-2xl border border-black p-2" type="password" name="Password" id="" placeholder="Enter Password" required onInput={handleError} onChange={(e) => setAdminEmail({ ...AdminEmail, [e.target.name]: e.target.value })} />
                  </div>
                  <p className="text-red-500 font-bold pl-3">{err}</p>
                  <div className=" w-full h-10 mt-3 justify-center items-center">
                    <button onClick={handleAdminLogin} className="bg-black w-1/2 h-10 text-white ml-20 rounded-3xl">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default AdminLoginForm