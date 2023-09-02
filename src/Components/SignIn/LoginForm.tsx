import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { axiosIntance } from "../../Api/config"
import {AxiosError} from "axios"
import jwt_decode from "jwt-decode";
import {useDispatch} from 'react-redux'
import { GoogleCredentialResponse, GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { updateUser } from "../../Redux/Slice/UserSlice";
interface LoginCheck {
    _id:string;
    Username:string;
    Email:string;
    Password:string;
}
interface ApiError {
    message: string;
  }
  interface JwtPayload {
    sub: string;
    name: string;
    exp: number;
    email:string;
  }

const LoginForm = () => {
    useEffect(() => {
        const User=  localStorage.getItem("User")      
        if(User){
            navigate("/")
        }
        }, [])

    const navigate=useNavigate()
    const Dispatch = useDispatch()
    const [UserLoginErr,setUserLoginErr]=useState<string|null>(null)
    const [LoginUser, setLoginUser] = useState({
        Username: "",
        Password: ""
    })
    console.log(LoginUser);


    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const { data } = await axiosIntance.post("/user/login", { ...LoginUser })
            const {AccessToken,logincheck}=data
            console.log(data);
            console.log(logincheck,"nihallllllllllllllllllllllllllllll"); 
            const UserDatas={
                AccessToken,
                logincheck
            }
            // console.log(logincheck.Username,logincheck.Email,logincheck._id,"halooooo");
            localStorage.setItem("User",JSON.stringify(UserDatas))
            Dispatch(
                updateUser({
                  username: logincheck.Username,
                  email: logincheck.Email,
                  id: logincheck._id,
                })
              );
            navigate("/")
        } catch (error) {
            const err = error as AxiosError;
            const message = err.response?.data as ApiError
            setUserLoginErr(message?.message)
            navigate("/Login")
        }
    }
const handleUserLoginError=()=>{
    setUserLoginErr(null)
}
const handleSignUp=()=>{
    navigate("/SignUp")
  }

  const handleUserGoogleSignUp=async(credentialResponse:GoogleCredentialResponse)=>{
    const {credential}=credentialResponse as GoogleCredentialResponse
    if(credential){
        try {
            var decoded:JwtPayload = jwt_decode(credential);
            const User={
                Username:decoded.name,
                Email:decoded.email,
                Password:decoded.email.split("@")[0],
                IsGoogle:true
                
            }
            
            const {data}=await axiosIntance.post("/user/register",{...User})
            if(data){
                console.log(data,"user is consolign");
                const {AccessToken,UserExit }=data  
                const UserDatas={
                    AccessToken,
                    UserExit
                }
                console.log(User,"halllo this is console form google login");
                
                localStorage.setItem("User",JSON.stringify(UserDatas))
                navigate("/") 
                Dispatch(
                    updateUser({
                        username: UserExit.Username,
                        email: UserExit.Email,
                        id: UserExit._id                        ,
                    })
                    );
            }
            console.log(decoded);
            
            
        } catch (error) {
            const googleSignUpErr=error as AxiosError
            const googlesignUpErrMsg=googleSignUpErr?.response?.data as ApiError
            const GoogleSignUpErrMess=googlesignUpErrMsg.message
            setUserLoginErr(GoogleSignUpErrMess)
        }
    }else{
        console.error('Invalid tokenId in GoogleCredentialResponse');
    }
  }
    return (
        <>
            <div className="w-80 h-10 pl-5 mt-3  ">
                <div className="w-9 h-10 ml-3 flex-row justify-center items-center ">
                    
                    <GoogleOAuthProvider clientId="357324625808-l9b5cg7tura0jriu178jdomecjkehfeh.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={handleUserGoogleSignUp}    />
                    </GoogleOAuthProvider>
                    {/* <h1  >SignUp With Google</h1> */}
                
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
                        <input className="w-full h h-full rounded-2xl border border-black p-2" type="text" name="Username" id="" placeholder="Enter Username" required onInput={handleUserLoginError} onChange={(e) => setLoginUser({ ...LoginUser, [e.target.name]: e.target.value })} />
                    </div>
                    <div className=" w-full h-6 ">
                        <h1>Password</h1>
                    </div>
                    <div className="w-full h-10 mt-1 ">
                        <input className="w-full h h-full rounded-2xl border border-black p-2" type="password" name="Password" id="" placeholder="Enter Password" required onInput={handleUserLoginError} onChange={(e) => setLoginUser({ ...LoginUser, [e.target.name]: e.target.value })} />
                    </div>
                    <div className="w-full p-2"> 
        <h1 className='text-sm'>Don`t  Have Account! <span className='text-blue-800 text-sm underline cursor-pointer' onClick={handleSignUp} > SignUp</span></h1>
        </div>
                    <p className='text-red-600 text-sm  p-1'>{UserLoginErr}</p>
                    <div className=" w-full h-10 justify-center items-center">
                        <button className="bg-black w-1/2 h-10 text-white ml-20 rounded-3xl" onClick={handleLoginSubmit} >Login</button>
                    </div>
                </form>
            </div>

        </>

    )
}

export default LoginForm