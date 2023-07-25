import SignInForm from "./Authbuttons"



const SignInImage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div className="flex flex-col justify-center">
      <div className="w-full h-16 sm:h-14 flex justify-between border shadow-lg border-b " >
          <img className=" h-full w-1/3 sm:w-1/6" src="\Images\Untitled-1-01.png" alt="" />
      </div>
      <div className="w-full h-full flex  bg-white -400">
        <div className="hidden md:flex w-1/2 justify-center items-center ">
          <img src="Images\elementary-school-student-boy-studying-online-vector-35332261.jpg" alt="" />
        </div>
        <div className="w-full flex sm:w-1/2  justify-center items-center">
          <SignInForm/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignInImage 