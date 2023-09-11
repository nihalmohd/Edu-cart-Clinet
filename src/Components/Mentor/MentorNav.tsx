import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logoutMentor } from "../../Redux/Slice/Mentorslice"

const MentorNav = () => {
  const Dispatch = useDispatch()
const navigate=useNavigate()
    const [showDropdown,SetshowDropdown]= useState<boolean>(false)
 const handlelogout=()=>{
    localStorage.removeItem("Mentor")
    Dispatch(logoutMentor())
    navigate('/Login')
 }
const navigateProfile =()=>{
  navigate("/Mentor/MentorProfile")
}
const navigateHome =()=>{
  navigate("/Mentor/MentorHome")
}
  return (
<div className="flex flex-col justify-center">
      <div className="w-full h-20 sm:h-[65px] flex justify-between border shadow-lg border-b">
        <img className="h-full hover:cursor-pointer " src="/Images/Untitled-1-01.png" alt="Logo"  onClick={()=>{navigate("/Mentor/MentorHome")}} />

        {/* Profile Picture and Navigation Links */}
        <div className="hidden sm:flex items-center space-x-4 p-2 relative">
          <span className="text-black hover:font-bold" onClick={()=>navigate("/Mentor/MentorCourse")}>My Courses</span>
          {/* <span className="text-black hover:font-bold">Users</span> */}
          <span className="text-black hover:font-bold" onClick={()=>navigate("/Mentor/MentorHome")} >Dashboard</span>
          <span className="text-black hover:font-bold" onClick={navigateProfile}>Profile</span>
          <div className="relative">
            <img
              className="h-8 w-8 rounded-3xl border border-black cursor-pointer"
              src="\Images\profile-icon-png-910.png"
              alt="User Profile"
              onClick={()=>SetshowDropdown(!showDropdown)}
            />
            {showDropdown ? (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10 ">
                <ul className="py-2">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={()=>navigate("/Mentor/MentorProfile")}>My Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handlelogout} >Logout</li>
                </ul>
              </div>
            ):<></>}
          </div>
        </div>
      </div>
    </div>


  )
}

export default MentorNav