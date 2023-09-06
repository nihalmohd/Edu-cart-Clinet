import { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosIntance } from '../../Api/config'
import { AxiosError } from "axios"
import { GoogleCredentialResponse, GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import MentorOtp from "./MentorOTPVerification"
import { useDispatch } from 'react-redux';
import { updateMentor } from '../../Redux/Slice/Mentorslice';

interface ApiError {
    message: string;
}
interface JwtPayload {
    sub: string;
    name: string;
    exp: number;
    email: string;
}

const MentorSignUp = () => {
    useEffect(() => {
        const User = localStorage.getItem("Mentor")
        if (User) {
            navigate("/MentorHome")
        }
    }, [])
    const Dispatch = useDispatch()
    const navigate = useNavigate()
    const [MentorOTP, setMentorOTP] = useState<boolean>(false)
    const [MentorSignUpErr, SetMentorSignUpErr] = useState<string | null>(null)
    const [Mentor, SetMentor] = useState({
        Email: "",
        Username: "",
        Password: ""
    })

    const handleMentorsubmit = async (e: FormEvent) => {
        e.preventDefault()
        try {
            const { data } = await axiosIntance.post("/Mentor/MentorRegister", { ...Mentor })
            console.log(data, "mentor google Authenticationn vern");
            const { AccessToken, User } = data

            const mentorData = {
                AccessToken,
                User
            }
            localStorage.setItem("Mentor", JSON.stringify(mentorData))
            Dispatch(
                updateMentor({
                    username: User.Username,
                    email: User.Email,
                    id: User._id                        ,
                })
                );
            handleMentorOTP()
        } catch (error) {
            const MentorErr = error as AxiosError
            const MentorSignUpError = MentorErr?.response?.data as ApiError
            const MentorSignUpErrMsg = MentorSignUpError.message
            SetMentorSignUpErr(MentorSignUpErrMsg)
            navigate("/signUp")
        }
    }
    const handleMentorOTP = async () => {
        try {
            setMentorOTP(true)
            const { data } = await axiosIntance.post("/user/OTP", { ...Mentor })
            console.log(data);

        } catch (error) {

        }
    }
    const handleMentorSignUpErr = () => {
        SetMentorSignUpErr(null)
    }
    const handleSignUp = () => {
        navigate("/Login")
    }
    const handleMetorGoogleSignUp = async (credentialResponse: GoogleCredentialResponse) => {
        const { credential } = credentialResponse as GoogleCredentialResponse
        if (credential) {
            console.log(credential);
            try {
                var decoded: JwtPayload = jwt_decode(credential);
                const Mentor = {
                    Username: decoded.name,
                    Email: decoded.email,
                    Password: decoded.email.split("@")[0],
                    IsGoogle: true

                }
                const { data } = await axiosIntance.post("/Mentor/MentorRegister", { ...Mentor })
                if (data) {
                    console.log(data, "mentor google Authenticationn vern");

                    const { AccessToken, UserExit } = data
                    const mentorData = {
                        AccessToken,
                        UserExit
                    }
                    localStorage.setItem("Mentor", JSON.stringify(mentorData))
                    Dispatch(
                        updateMentor({
                            username: UserExit.Username,
                            email: UserExit.Email,
                            id: UserExit._id                        ,
                        })
                        );
                    navigate("/Mentor/MentorHome")
                }
                console.log(decoded);


            } catch (error) {
                const googleSignUpErr = error as AxiosError
                const googlesignUpErrMsg = googleSignUpErr?.response?.data as ApiError
                const GoogleSignUpErrMess = googlesignUpErrMsg.message
                SetMentorSignUpErr(GoogleSignUpErrMess)
            }
        } else {
            console.error('Invalid tokenId in GoogleCredentialResponse');
        }

    }
    return (
        <div>
            <div className="w-80 h-10 pl-5 mt-3 ">
                <div className="w-9 h-8 ml-3 flex-row justify-between ">
                    <GoogleOAuthProvider clientId="357324625808-l9b5cg7tura0jriu178jdomecjkehfeh.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={handleMetorGoogleSignUp} />
                    </GoogleOAuthProvider>
                </div>
            </div>
            <div className=" w-full h-10 mt-1 p-1 flex-col" >
                <h1 className="text-black text-sm ml-10" >--  Or SignUp With Your Email -- </h1>
            </div>
            {!MentorOTP &&
                <div className=" w-full h-80 flex-col p-1">
                    <form action="">
                        <div className=" w-full h-6 ">
                            <h1>Email Address</h1>
                        </div>
                        <div className="w-full h-10 mt-1 ">
                            <input className="w-full h h-full rounded-2xl border border-black p-2" name="Email" id="" placeholder="Enter Your Email Address" onInput={handleMentorSignUpErr} onChange={(e) => SetMentor({ ...Mentor, [e.target.name]: e.target.value })} />
                        </div>
                        <div className=" w-full h-6 ">
                            <h1>Username</h1>
                        </div>
                        <div className="w-full h-10 mt-1 ">
                            <input className="w-full h h-full rounded-2xl border border-black p-2" type="text" name="Username" id="" placeholder="Enter Username" required onInput={handleMentorSignUpErr} onChange={(e) => SetMentor({ ...Mentor, [e.target.name]: e.target.value })} />
                        </div>
                        <div className=" w-full h-6 ">
                            <h1>Password</h1>
                        </div>
                        <div className="w-full h-10 mt-1 ">
                            <input className="w-full h h-full rounded-2xl border border-black p-2" type="password" name="Password" id="" placeholder="Enter Password" required onInput={handleMentorSignUpErr} onChange={(e) => SetMentor({ ...Mentor, [e.target.name]: e.target.value })} />
                        </div>
                        <div className="w-full p-2">
                            <h1 className='text-sm'>Already Have Account! <span className='text-blue-800 text-sm underline cursor-pointer' onClick={handleSignUp} > Login</span></h1>
                        </div>
                        <p className='text-red-600 text-sm  p-1'>{MentorSignUpErr}</p>
                        <div className=" w-full h-10  justify-center items-center">

                            <button onClick={handleMentorsubmit} className="bg-black w-1/2 h-10 text-white ml-20 rounded-3xl">Register</button>
                        </div>
                    </form>
                </div>}
            {MentorOTP && <MentorOtp Mentor={Mentor} />}
        </div>
    )
}

export default MentorSignUp


