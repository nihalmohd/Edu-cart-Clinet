import { useState } from 'react';
import { FaRegHeart,FaShoppingCart } from 'react-icons/fa'
import { GrNotification } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate=useNavigate()
  const [showDropdown,SetshowDropdown]= useState<boolean>(false)

  const handleLogout=()=>{
   const User= localStorage.removeItem("User")
   navigate("/Login")
   console.log(User);
  }
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full h-20 sm:h-[65px] flex justify-between border shadow-lg border-b">
        
        <img className="h-full " src="/Images/Untitled-1-01.png" alt="Logo" />

        
        <div className="hidden sm:flex items-center">
          <span className="mr-4 text-black">Category</span>
        </div>

        
        <div className="hidden sm:flex items-center w-3/4 sm:w-2/6">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full p-2  border border-black rounded-3xl "
          />
        </div>

        
        <div className="hidden sm:flex items-center gap-2">
          <span className="mx-4 text-black">Mentor</span>
          <span className="mx-4 text-black">My Course</span>
        </div>

        
        <div className="hidden sm:flex items-center">
          <FaRegHeart/>
        </div>
       
        <div className="hidden sm:flex items-center">
          <GrNotification/>
        </div>

       
        <div className="hidden sm:flex items-center">
          <img
            className="h-8 w-8 rounded-3xl border border-black mr-2"
            src="\Images\profile-icon-png-910.png"
            alt="User Profile" onClick={()=>{SetshowDropdown(!showDropdown)}}
          />
        </div>
        {showDropdown ? (
              <div className="absolute right-0 mt-20 w-40  bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                <ul >
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}  >Logout</li>
                </ul>
              </div>
            ):<></>}
      </div>
    </div>
  )
}

export default Nav