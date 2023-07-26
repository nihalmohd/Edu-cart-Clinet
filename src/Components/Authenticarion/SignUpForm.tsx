import axios  from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpForm = () => {
    const navigate=useNavigate()
const [user,Setuser]=useState({
    Email:"",
    Username:"",
    Password:""
})

const handlesubmit=async (e:React.FormEvent)=>{
    e.preventDefault();
    console.log(user);
    try {
        const {data}=await axios.post("http://localhost:5000/user/register",{...user})
        console.log(data);
if(data.User){
    navigate("/")
}else{

navigate("/Auth")
}
    } catch (error) {
        
        console.log(error);
        
    }


}
    
  return (
    <>
      <div className="w-80 h-10 p-1 border border-black rounded-lg mt-4 flex gap-9 ">
                    <div className="w-9 h-8 ml-3 flex-row justify-between ">
                        <img className="w-full h-full" src="\Images\98dfdf3827082a15da731db63938da96.png" alt="Google Sign Up Image" />
                    </div>
                    <div className="w-64 h-8 p-1">
                        <h1  >SignUp With Google</h1>
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
            <input className="w-full h h-full rounded-2xl border border-black p-2"  name="Email" id="" placeholder="Enter Your Email Address"  onChange={(e)=>Setuser({...user,[e.target.name]:e.target.value})} />
        </div>
        <div className=" w-full h-6 ">
            <h1>Username</h1>
        </div>
        <div className="w-full h-10 mt-1 ">
            <input className="w-full h h-full rounded-2xl border border-black p-2" type="text" name="Username" id="" placeholder="Enter Username" required onChange={(e)=>Setuser({...user,[e.target.name]:e.target.value})}/>
        </div>
        <div className=" w-full h-6 ">
            <h1>Password</h1>
        </div>
        <div className="w-full h-10 mt-1 ">
            <input className="w-full h h-full rounded-2xl border border-black p-2" type="password" name="Password" id="" placeholder="Enter Password" required onChange={(e)=>Setuser({...user,[e.target.name]:e.target.value})} />
        </div>
        <div className=" w-full h-10 mt-4 justify-center items-center">
            <button onClick={handlesubmit} className="bg-black w-1/2 h-10 text-white ml-20 rounded-3xl">Register</button>
        </div>
    </form>
</div>
</>
  )
}

export default SignUpForm