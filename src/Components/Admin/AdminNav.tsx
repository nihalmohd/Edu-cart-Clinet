import { useNavigate } from 'react-router-dom'

const AdminNav = () => {
    const navigate=useNavigate()
  return (
    <div className="flex flex-col justify-center">
  <div className="w-full h-20 sm:h-[65px] flex justify-between border shadow-lg border-b">
    <img className="h-full w-1/3 sm:w-1/6" src="/Images/Untitled-1-01.png" alt="Logo" />

    {/* Profile Picture and Navigation Links */}
    <div className="hidden sm:flex items-center space-x-4 p-2">
      <span className="text-black hover:font-bold"> Courses</span>
      <span className="text-black hover:font-bold" onClick={()=>{navigate("/EducartUsers")}} >Users</span>
      <span className="text-black hover:font-bold" onClick={()=>{navigate("/EducartMentor")}} >Mentor</span>
      <span className="text-black hover:font-bold" >Dashboard</span>
      <span className="text-black hover:font-bold">Profile</span>
      <img
        className="h-8 w-8 rounded-3xl border border-black "
        src="\Images\profile-icon-png-910.png"
        alt="User Profile"
      />
    </div>
  </div>
</div>
  )
}

export default AdminNav