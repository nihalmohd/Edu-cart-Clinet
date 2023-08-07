import React from 'react'
import LoginForn from './LoginForm'
import LoginAuthButtons from './LoginAuthButtons'

const LoginFormImage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="flex flex-col justify-center">
        <div className="w-full h-20 sm:h-14 flex justify-between border shadow-lg border-b " >
          <img className=" h-full " src="\Images\Untitled-1-01.png" alt="" />
        </div>
        <div className="w-full h-full flex " >
          <div className="hidden md:flex w-1/2 justify-center items-center ">
            <img src="public\Images\441-removebg-preview.png" alt="" />
          </div>
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <LoginAuthButtons />

          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginFormImage