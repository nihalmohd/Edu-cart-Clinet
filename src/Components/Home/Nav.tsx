import { FaRegHeart,FaShoppingCart } from 'react-icons/fa'
import { GrNotification } from 'react-icons/gr';

const Nav = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-full h-20 sm:h-[65px] flex justify-between border shadow-lg border-b">
        
        <img className="h-full w-1/3 sm:w-1/6" src="/Images/Untitled-1-01.png" alt="Logo" />

        
        <div className="hidden sm:flex items-center">
          <span className="mr-4 text-black">Category</span>
        </div>

        
        <div className="hidden sm:flex items-center w-1/3 sm:w-2/6">
          <input
            type="text"
            placeholder="Search for anything"
            className="w-full p-2  border border-black rounded-3xl "
          />
        </div>

        
        <div className="hidden sm:flex items-center">
          <span className="mx-4 text-black">Mentor</span>
          <span className="mx-4 text-black">My Course</span>
        </div>

        
        <div className="hidden sm:flex items-center">
          {/* <img
            className="h-6 w-6 border border-black rounded-full"
            src="AiOutlineHeart"
            alt="Love Icon"
          /> */}
          <FaRegHeart/>
        </div>

        
        <div className="hidden sm:flex items-center">
          {/* <img
            className="h-6 w-6 bg-transparent border border-black rounded-full"
            src="/path-to-chart-logo.png"
            alt="Chart Logo"
          /> */}
          <FaShoppingCart/>
        </div>

       
        <div className="hidden sm:flex items-center">
          {/* <img
            className="h-6 w-6 border border-black rounded-full"
            src="/path-to-bell-icon.png"
            alt="Bell Icon"
          /> */}
          <GrNotification/>
        </div>

       
        <div className="hidden sm:flex items-center">
          <img
            className="h-8 w-8 rounded-3xl border border-black mr-2"
            src="\Images\profile-icon-png-910.png"
            alt="User Profile"
          />
        </div>
      </div>
    </div>
  )
}

export default Nav