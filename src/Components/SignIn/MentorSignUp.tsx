import  { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosIntance } from '../../Api/config'
import {AxiosError} from "axios"
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

const MentorSignUp = () => {
        const navigate=useNavigate()  
    const [MentorSignUpErr,SetMentorSignUpErr]=useState<string|null>(null)
    const [Mentor,SetMentor]=useState({
        Email:"",
        Username:"",
        Password:""
    })

    const handleMentorsubmit=async(e:FormEvent)=>{
        e.preventDefault()
       try {
        const {data}=await axiosIntance.post("/Mentor/MentorRegister",{...Mentor})
        console.log(data);
        const {AccessToken,User} = data
        const mentorData={
          AccessToken,
          User
        }
        localStorage.setItem("Mentor",JSON.stringify(mentorData))
        navigate("/")
       } catch (error) {
        const MentorErr=error as AxiosError
        const MentorSignUpError=MentorErr?.response?.data as ApiError
        const MentorSignUpErrMsg=MentorSignUpError.message
        SetMentorSignUpErr(MentorSignUpErrMsg)
        navigate("/signUp")
       }
    }
    const handleMentorSignUpErr=()=>{
        SetMentorSignUpErr(null)
    }
    const handleSignUp =()=>{
        navigate("/Login")
    }
    const handleMetorGoogleSignUp=async(credentialResponse:GoogleCredentialResponse)=>{
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
                    
                    navigate("/MentorHome")
                }
                console.log(decoded);
                
                
            } catch (error) {
                const googleSignUpErr=error as AxiosError
                const googlesignUpErrMsg=googleSignUpErr?.response?.data as ApiError
                const GoogleSignUpErrMess=googlesignUpErrMsg.message
                SetMentorSignUpErr(GoogleSignUpErrMess)
            }
        }else{
            console.error('Invalid tokenId in GoogleCredentialResponse');
        }
    
}
  return (
    <div>
        <div className="w-80 h-10 pl-5 mt-3 ">
                    <div className="w-9 h-8 ml-3 flex-row justify-between ">
                    <GoogleOAuthProvider clientId="357324625808-l9b5cg7tura0jriu178jdomecjkehfeh.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={handleMetorGoogleSignUp}    />
                    </GoogleOAuthProvider>
                    </div>
                </div>
                <div className=" w-full h-10 mt-1 p-1 flex-col" >
                    <h1 className="text-black text-sm ml-10" >--  Or SignUp With Your Email -- </h1>
                </div>
    <div className=" w-full h-80 flex-col p-1">
    <form action="">
        <div className=" w-full h-6 ">
            <h1>Email Address</h1>
        </div>
        <div className="w-full h-10 mt-1 ">
            <input className="w-full h h-full rounded-2xl border border-black p-2"  name="Email" id="" placeholder="Enter Your Email Address" onInput={handleMentorSignUpErr}  onChange={(e)=>SetMentor({...Mentor,[e.target.name]:e.target.value})} />
        </div>
        <div className=" w-full h-6 ">
            <h1>Username</h1>
        </div>
        <div className="w-full h-10 mt-1 ">
            <input className="w-full h h-full rounded-2xl border border-black p-2" type="text" name="Username" id="" placeholder="Enter Username" required onInput={handleMentorSignUpErr} onChange={(e)=>SetMentor({...Mentor,[e.target.name]:e.target.value})}/>
        </div>
        <div className=" w-full h-6 ">
            <h1>Password</h1>
        </div>
        <div className="w-full h-10 mt-1 ">
            <input className="w-full h h-full rounded-2xl border border-black p-2" type="password" name="Password" id="" placeholder="Enter Password" required onInput={handleMentorSignUpErr} onChange={(e)=>SetMentor({...Mentor,[e.target.name]:e.target.value})} />
        </div>
        <div className="w-full p-2"> 
        <h1 className='text-sm'>Already Have Account! <span className='text-blue-800 text-sm underline cursor-pointer' onClick={handleSignUp} > Login</span></h1>
        </div>
        <p className='text-red-600 text-sm  p-1'>{MentorSignUpErr}</p>
        <div className=" w-full h-10  justify-center items-center">

            <button onClick={handleMentorsubmit} className="bg-black w-1/2 h-10 text-white ml-20 rounded-3xl">Register</button>
        </div>
    </form>
</div>
    </div>
  )
}

export default MentorSignUp

// function jwt_decode(credential: string): JwtPayload {
//     throw new Error('Function not implemented.');
// }