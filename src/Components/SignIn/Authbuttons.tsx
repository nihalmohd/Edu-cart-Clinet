import { useState } from "react"
// import {useNavigate} from "react-router-dom"
import SignUpForm from "./SignUpForm"
import MentorSignUp from "./MentorSignUp"
import { Navigate, useNavigate } from "react-router-dom"


const  Authbuttons = () => {  
    // const navigate=useNavigate()
    const [ShowMentorSignUpForm,setShowMentorSignUpForm]=useState(false)
    const [showUserSignUpForm,setshowUserSignUpForm]=useState(true)

    const handleShowSignUpMentor=()=>{
        setShowMentorSignUpForm(true)
        setshowUserSignUpForm(false)
    }
    const handleShowSignUpUser=()=>{
        setShowMentorSignUpForm(false)
        setshowUserSignUpForm(true)
    }

    return (
        <>
        <div className="flex">
            <div className=" flex-col  mt-4 justify-center items-center h-screen p-3">
                <h1 className="text-xl font-bold mb-4">Welcome to Educart...!</h1>

                <div className="w-80 h-10 bg-gray-500 rounded-3xl p-1.5 relative flex gap-14">
                <div className={`${ShowMentorSignUpForm?"bg-black w-40 h-7 rounded-3xl pl-9":"bg-transparent w-40 h-7 rounded-3xl pl-10"}`}>
                    <h1 className="text-slate-50  cursor-pointer" onClick={handleShowSignUpMentor} >Mentor</h1>
                    </div>
                    <div className={`${showUserSignUpForm?"bg-black w-40 h-7 rounded-3xl pl-10":"bg-transparent w-40 h-7 rounded-3xl pl-10"}`}>
                        <h1 className="text-white  cursor-pointer "onClick={handleShowSignUpUser}>Student</h1>
                    </div>
                </div>
                <div className="">
                {showUserSignUpForm&&<SignUpForm/>}
                {ShowMentorSignUpForm&&<MentorSignUp/>}
            </div>
            </div>
            </div>
        </>



    )
}

export default Authbuttons