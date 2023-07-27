import React, { FormEvent, useState } from 'react'
import { axiosIntance } from '../../Api/config'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { GoogleCredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
interface ApiError {
  message: string;
}
interface JwtPayload {
  sub: string;
  name: string;
  exp: number;
  email:string;
}

const MentorLoginForm = () => {
  const navigate = useNavigate()
  const [MentorLoignErr, setmentorLoginErr] = useState<string | null>(null)
  const [MentorLogin, setMentorLogin] = useState({
    Username: "",
    Password: "",
  })
  const handleMentorLogin =async (e: FormEvent) => {
    e.preventDefault()
    try {
      const {data}=await axiosIntance.post("/Mentor/MentorLogin", { ...MentorLogin })
      navigate("/")
    } catch (error) {
      const MentorLoginError = error as AxiosError
      const MentorLognErrorMsg = MentorLoginError?.response?.data as ApiError
      const MentorLoginErrorMess = MentorLognErrorMsg?.message
      setmentorLoginErr(MentorLoginErrorMess)
      navigate("/Login")  
    }
  }
  const handleMentorLoginError = () => {
    setmentorLoginErr(null)
  }

  const handleLogin=()=>{
    navigate("/SignUp")
  }
  const handlemMentorGoogleSignUp=async(credentialResponse:GoogleCredentialResponse)=>{
    const {credential}=credentialResponse as GoogleCredentialResponse
    if(credential){
        try {
            var decoded:JwtPayload = jwt_decode(credential);
            const Mentor={
                Username:decoded.name,
                Email:decoded.email,
                Password:decoded.email.split("@")[0],
                IsGoogle:true
                
            }
            
            const {data}=await axiosIntance.post("/Mentor/MentorRegister",{...Mentor})
            if(data){
                
                navigate("/")
            }
            console.log(decoded);
            
            
        } catch (error) {
            const googleSignUpErr=error as AxiosError
            const googlesignUpErrMsg=googleSignUpErr?.response?.data as ApiError
            const GoogleSignUpErrMess=googlesignUpErrMsg.message
            setmentorLoginErr(GoogleSignUpErrMess)
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
                            onSuccess={handlemMentorGoogleSignUp}    />
                    </GoogleOAuthProvider>
                    {/* <h1  >SignUp With Google</h1> */}
                
                            </div>
            </div>
      <div className=" w-full h-10 mt-1 p-1 flex-col justify-center items-center" >
        <h1 className="text-black text-sm ml-10" >--  Or Login With Your Email -- </h1>
      </div>
      <div className=" w-full h-80 flex-col p-1">
        <form action="">
          <div className=" w-full h-6 ">
            <h1>Username</h1>
          </div>
          <div className="w-full h-10 mt-1 ">
            <input className="w-full h h-full rounded-2xl border border-black p-2" type="text" name="Username" id="" placeholder="Enter Username" required onInput={handleMentorLoginError} onChange={(e) => setMentorLogin({ ...MentorLogin, [e.target.name]: e.target.value })} />
          </div>
          <div className=" w-full h-6 ">
            <h1>Password</h1>
          </div>
          <div className="w-full h-10 mt-1 ">
            <input className="w-full h h-full rounded-2xl border border-black p-2" type="password" name="Password" id="" placeholder="Enter Password" required onInput={handleMentorLoginError} onChange={(e) => setMentorLogin({ ...MentorLogin, [e.target.name]: e.target.value })} />
          </div>
          <div className="w-full p-2">
            <h1 className='text-sm'>Don`t Have Account! <span className='text-blue-800 text-sm underline cursor-pointer' onClick={handleLogin} > SignUp</span></h1>
          </div>
          <p className='text-red-600 text-sm  p-1'>{MentorLoignErr}</p>
          <div className=" w-full h-10  justify-center items-center">
            <button className="bg-black w-1/2 h-10 text-white ml-20 rounded-3xl" onClick={handleMentorLogin} >Login</button>
          </div>
        </form>
      </div>

    </>

  )
}

export default MentorLoginForm