import { useState } from "react"
import {useNavigate} from "react-router-dom"
import LoginForn from "./LoginForn"
import SignUpForm from "./SignUpForm"


const   Authbuttons = () => {  
    const navigate=useNavigate()
    const [ShowLoginForm,setShowLoginForm]=useState(false)
    const [showSignUpForm,setshowSignUpForm]=useState(true)

    const handleShowLogin=()=>{
        setShowLoginForm(true)
        setshowSignUpForm(false)
    }
    const handleShowSignUp=()=>{
        setShowLoginForm(false)
        setshowSignUpForm(true)
    }

    return (
        <>
        <div className="flex">
            <div className="flex flex-col  mt-4 justify-center items-center h-screen p-3">
                <h1 className="text-xl font-bold mb-4">Welcome to Educart...!</h1>

                <div className="w-80 h-10 bg-gray-500 rounded-3xl p-1.5 relative flex gap-14">
                    <h1 className={`${ShowLoginForm? "bg-black":" "}text-slate-50 ml-12 cursor-pointer `} onClick={handleShowLogin} >Login</h1>
                    <div className="w-40 h-7 bg-black rounded-3xl">
                        <h1 className="text-white ml-14 cursor-pointer "onClick={handleShowSignUp}>Register</h1>
                    </div>
                </div>
                <div className="">
                {showSignUpForm&&<SignUpForm/>}
                {ShowLoginForm&&<LoginForn/>}
            </div>
            </div>
            
            </div>
        </>



    )
}

export default Authbuttons