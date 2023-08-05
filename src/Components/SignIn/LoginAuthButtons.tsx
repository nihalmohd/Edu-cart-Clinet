import  { useState } from 'react'
import LoginForn from './LoginForm'
import MentorLoginForm from './MentorLoginForm'

const LoginAuthButtons = () => {
    
    const [ShowMentorLoginForm,setShowMentorLoginForm]=useState(false)
    const [showUserLoginForm,setshowUserLoginForm]=useState(true)

    const handleShowLoginMentor=()=>{
        setShowMentorLoginForm(true)
        setshowUserLoginForm(false)
    }
    const handleShowLoginUser=()=>{
        setShowMentorLoginForm(false)
        setshowUserLoginForm(true)
    }

  return (
    <div>
         <>
        <div className="flex">
            <div className="flex flex-col  mt-4 justify-center items-center h-screen p-3">
                <h1 className="text-xl font-bold mb-4">Welcome to Educart...!</h1>

                <div className="w-80 h-10 bg-gray-500 rounded-3xl p-1.5 relative flex gap-14">
                <div className={`${ShowMentorLoginForm?"bg-black w-40 h-7 rounded-3xl pl-9":"bg-transparent w-40 h-7 rounded-3xl pl-9"}`}>
                    <h1 className="text-slate-50  cursor-pointer" onClick={handleShowLoginMentor} >Mentor</h1>
                    </div>
                    <div className={`${showUserLoginForm?"bg-black w-40 h-7 rounded-3xl pl-10":"bg-transparent w-40 h-7 rounded-3xl pl-10"}`}>
                        <h1 className="text-white  cursor-pointer" onClick={handleShowLoginUser} >Student</h1>
                    </div>
                </div>
                <div className="">
                    {showUserLoginForm&&<LoginForn/>}
                    {ShowMentorLoginForm&&<MentorLoginForm/>}
            </div>
            </div>
            </div>
        </>



    </div>
  )
}

export default LoginAuthButtons