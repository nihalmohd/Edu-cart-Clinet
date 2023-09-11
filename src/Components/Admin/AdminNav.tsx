import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNav = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem('Admin');
    navigate('/Educart/EducartLogin');
  };

  return (
    <div className="flex flex-col justify-center ">
      <div className="w-full h-20 sm:h-[65px] flex justify-between border shadow-lg border-b">
        <img className="h-full hover:cursor-pointer " src="/Images/Untitled-1-01.png" alt="Logo" />
        <div className="hidden sm:flex items-center space-x-4 p-2 relative ">
          <span className="text-black hover:font-bold"onClick={()=>{navigate("/Educart/EducartCourses")}}>
            Courses
          </span>
          <span className="text-black hover:font-bold" onClick={() => navigate('/Educart/EducartUsers')}>
            Users
          </span>
          <span className="text-black hover:font-bold" onClick={() => navigate('/Educart/EducartMentors')}>
            Mentor
          </span>
          <span className="text-black hover:font-bold" onClick={() => navigate('/Educart/EducartBanner')}>
            Banner
          </span>
          <span className="text-black hover:font-bold" onClick={() => navigate('/Educart/EducartCategory')}>
            Category
          </span>
          <span className="text-black hover:font-bold" onClick={()=>{navigate("/Educart/EducartDash")}} >
            Dashboard
            </span>
          {/* <span className="text-black hover:font-bold">
            Profile
            </span> */}
          <div style={{ position: 'relative' }}>
            <img
              className="h-8 w-8 rounded-3xl border border-black"
              src="\Images\profile-icon-png-910.png"
              alt="User Profile"
              onClick={() => setShowDropdown(!showDropdown)}
            />
            {showDropdown ? (
              <div
                className="absolute top-12 right-0 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10"
              >
                <ul className="py-2">
                  {/* <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">My Profile</li> */}
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </div>
            ):<></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNav;
