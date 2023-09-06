import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosIntance } from '../../Api/config'
import { GoogleOAuthProvider, GoogleLogin, GoogleCredentialResponse } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import OTP from './OTPVerification';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../Redux/Slice/UserSlice';

interface ApiError {
    message: string;
}
interface JwtPayload {
    sub: string;
    name: string;
    exp: number;
    email: string;
}

const SignUpForm = () => {
useEffect(() => {
const User=  localStorage.getItem("User")      
if(User){
    navigate("/")
}
}, [])


    const navigate = useNavigate()
    const Dispatch =useDispatch()
    const [Otp, setOTP] = useState(false)
    // const [userOtp, setUserOtp] = useState<boolean>(false)
    const [SignUpErr, setSignUpErr] = useState<string | null>(null)
    const [user, Setuser] = useState({
        Email: "",
        Username: "",
        Password: "",
    })

    const handlesubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(user);
        try {
            const { data } = await axiosIntance.post("/user/register", { ...user })
            const { AccessToken, User } = data
            console.log(data,"Siginup Typingl ninn ");
            
            const Userdatas = {
                AccessToken,
                User
            }

            localStorage.setItem("User", JSON.stringify(Userdatas))
            Dispatch(
                updateUser({
                    username: User.Username,
                    email: User.Email,
                    id: User._id                        ,
                })
                );
            console.log(data);
            handleUserOTP()
        } catch (error) {
            const Error = error as AxiosError
            const SignUpError = Error.response?.data as ApiError
            const SignUpErrMsg = SignUpError.message
            setSignUpErr(SignUpErrMsg)
        }
    }
    const handleSignUpError = () => {
        setSignUpErr(null)
    }
    const handleLogin = () => {
        navigate("/Login")
    }
    const handleGoogleSignUp = async (credentialResponse: GoogleCredentialResponse) => {
        const { credential } = credentialResponse as GoogleCredentialResponse
        if (credential) {
            try {
                var decoded: JwtPayload = jwt_decode(credential);
                console.log(credential);
                const UserGoole = {
                    Username: decoded.name,
                    Email: decoded.email,
                    Password: decoded.email.split("@")[0],
                    IsGoogle: true

                }

                const { data } = await axiosIntance.post("/user/register", { ...UserGoole })
                if (data) {
                    
                    const { AccessToken, UserExit } = data
                    console.log(data,"signUPilln vernn");
                    
                    const Userdatas = {
                        AccessToken,
                        UserExit
                    }
                    localStorage.setItem("User", JSON.stringify(Userdatas))
                    Dispatch(
                        updateUser({
                            username: UserExit.Username,
                            email: UserExit.Email,
                            id: UserExit._id                        ,
                        })
                        );
                    navigate("/", { replace: true })
                }
                console.log(decoded);


            } catch (error) {
                const googleSignUpErr = error as AxiosError
                const googlesignUpErrMsg = googleSignUpErr?.response?.data as ApiError
                const GoogleSignUpErrMess = googlesignUpErrMsg.message
                setSignUpErr(GoogleSignUpErrMess)
            }
        } else {
            console.error('Invalid tokenId in GoogleCredentialResponse');
        }
    }
    const handleUserOTP = async () => {
        try {
            setOTP(true)
            const { data } = await axiosIntance.post("/user/OTP", { ...user })
            console.log(data);
            
        } catch (error) {

        }
    }
    return (
        <>
            <div className="w-80 h-10 pl-5 mt-3  ">
                <div className="w-9 h-10 ml-3 flex-row justify-center items-center ">

                    <GoogleOAuthProvider clientId="357324625808-l9b5cg7tura0jriu178jdomecjkehfeh.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={handleGoogleSignUp} />
                    </GoogleOAuthProvider>
                    {/* <h1  >SignUp With Google</h1> */}

                </div>
            </div>
            <div className=" w-full h-10 mt-1 p-1 flex-col" >
                <h1 className="text-black text-sm ml-10" >--  Or SignUp With Your Email -- </h1>
            </div>
            {!Otp &&
                <div className=" w-full h-80 flex-col p-1">
                    <form action="">
                        <div className=" w-full h-6 ">
                            <h1>Email Address</h1>
                        </div>
                        <div className="w-full h-10 mt-1 ">
                            <input className="w-full h h-full rounded-2xl border border-black p-2" name="Email" id="" placeholder="Enter Your Email Address" onInput={handleSignUpError} onChange={(e) => Setuser({ ...user, [e.target.name]: e.target.value })} />
                        </div>
                        <div className=" w-full h-6 ">
                            <h1>Username</h1>
                        </div>
                        <div className="w-full h-10 mt-1 ">
                            <input className="w-full h h-full rounded-2xl border border-black p-2" type="text" name="Username" id="" placeholder="Enter Username" required onInput={handleSignUpError} onChange={(e) => Setuser({ ...user, [e.target.name]: e.target.value })} />
                        </div>
                        <div className=" w-full h-6 ">
                            <h1>Password</h1>
                        </div>
                        <div className="w-full h-10 mt-1 ">
                            <input className="w-full h h-full rounded-2xl border border-black p-2" type="password" name="Password" id="" placeholder="Enter Password" required onInput={handleSignUpError} onChange={(e) => Setuser({ ...user, [e.target.name]: e.target.value })} />
                        </div>
                        <div className="w-full p-2">
                            <h1 className='text-sm'>Already Have Account! <span className='text-blue-800 text-sm underline cursor-pointer' onClick={handleLogin} > Login</span></h1>
                        </div>
                        <p className='text-red-600 p-1 text-sm'>{SignUpErr}</p>
                        <div className=" w-full h-10  justify-center items-center">
                            <button onClick={handlesubmit} className="bg-black w-1/2 h-10 text-white ml-20 rounded-3xl">Register</button>
                        </div>
                    </form>
                </div>}
            {Otp && <OTP user={user} />}
        </>
    )
}


export default SignUpForm



