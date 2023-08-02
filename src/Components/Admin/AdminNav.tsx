import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminNav = () => {
    const navigate=useNavigate()
    const [showDropdown,SetshowDropdown]= useState<boolean>(false)
    const handlelogout=()=>{
        localStorage.removeItem("Admin")
        navigate("/EducartLogin")
    }
  return (
    <div className="flex flex-col justify-center">
  <div className="w-full h-20 sm:h-[65px] flex justify-between border shadow-lg border-b">
    <img className="h-full w-1/3 sm:w-1/6" src="/Images/Untitled-1-01.png" alt="Logo" />

    {/* Profile Picture and Navigation Links */}
    <div className="hidden sm:flex items-center space-x-4 p-2">
      <span className="text-black hover:font-bold"> Courses</span>
      <span className="text-black hover:font-bold" onClick={()=>{navigate("/EducartUsers")}} >Users</span>
      <span className="text-black hover:font-bold" onClick={()=>{navigate("/EducartMentors")}} >Mentor</span>
      <span className="text-black hover:font-bold" >Dashboard</span>
      <span className="text-black hover:font-bold">Profile</span>
      <img
        className="h-8 w-8 rounded-3xl border border-black "
        src="\Images\profile-icon-png-910.png"
        alt="User Profile" onClick={()=>SetshowDropdown(!showDropdown)}
      />
      {showDropdown && (
              <div className="absolute right-0 mt-20 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                <ul className="py-2     ">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handlelogout} >Logout</li>
                </ul>
              </div>
            )}
    </div>
  </div>
</div>
  )
}

export default AdminNav