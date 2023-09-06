import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import {TbEdit} from "react-icons/tb"
import {SiCoursera} from 'react-icons/si'
import {TbHeartPlus,TbLockCog} from "react-icons/tb"
import {TiContacts} from "react-icons/ti"
import {BiLogOut} from "react-icons/bi"
import { axiosIntance } from '../../../Api/config'
import { logoutUser } from '../../../Redux/Slice/UserSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'


interface User {
    _id:string;
    Username:string;
    Email:string;
    Password:string;
    ProfileImage:string
}

const UserProfile = () => {
    const [user,setUser] =useState<User>()
    const [ImagePreviewProfile,setImagePreviewProfile] =useState<string |null  >(null)
    const [UpdateUsername,setUpdateUsername] = useState<string |undefined >("")
    const [isProfileModalOpen,setisProfileModalOpen] = useState<boolean>(false)
    // const [inputUsername,setInputUsername] = useState<string  | unknown>(user?.Username)
    const ProfileRef = useRef<HTMLInputElement>(null)
    const Dispatch =useDispatch()
    const navigate = useNavigate()
useEffect(()=>{
fetchUser()
},[isProfileModalOpen])

const fetchUser = async () =>{
    const {data} =await axiosIntance.get("/ProfileTakeUser")
    if(data){
        console.log(data);
       const {FoundedUser} = data 
       setUser(FoundedUser)
    }
}
const handleLogout=()=>{
    const User= localStorage.removeItem("User")
    Dispatch(logoutUser())
    navigate("/Login")
    console.log(User);
   }
   const EditProfile =async ()=>{
    console.log("nihallll");
    
    setisProfileModalOpen(true)
   }
   const TakeClick = ()=>{
    if(ProfileRef?.current){
        ProfileRef.current.click()
    }
   }
   const handleFileChangesProfile = async (event: ChangeEvent<HTMLInputElement>)=>{
    const Cloudname = import.meta.env.VITE_CLOUDNAME
    const SelectedFilesProfile =event.target.files && event.target.files[0]
    if (SelectedFilesProfile) {
       
        const formData = new FormData();
        formData.append('file', SelectedFilesProfile);
        formData.append('upload_preset', 'Educart');
  console.log(formData,"__________________________");
  
        try {
          const { data } = await axios.post(
            `https://api.cloudinary.com/v1_1/${Cloudname}/image/upload?upload_preset=Educart`,
            formData
          );
          const imageUrl = data.secure_url
          console.log(imageUrl,'cloudinrn data kittiiyo');
          setImagePreviewProfile(imageUrl);
        } catch (error) {
          console.error('Upload error:', error);
        }
      } else {
        setImagePreviewProfile(null);
      }
      console.log('Selected file:', SelectedFilesProfile);
    };
    const HandleUpdateUsername = (e:ChangeEvent<HTMLInputElement>)=>{
       e.preventDefault()
       setUpdateUsername(e.target.value)
    }
   console.log(ImagePreviewProfile,UpdateUsername,"Nihaldklfjasdkflj;asdkjfkjasdfj laksdf jasd_________________");
   const handleSubmit = async() =>{
    const {data} = await axiosIntance.post("/UpdateProfile",{ImagePreviewProfile,UpdateUsername})
    if(data){
        console.log(data);
        setisProfileModalOpen(false)
    }
   } 
   
    return (
        <div>
            <div className="w-full h-screen ">
                <div className="w-full h-16">
                    <div className="sm:w-full md:w-1/4 h-full flex justify-center items-center">

                        <h1 className='md:font-serif md:text-2xl font-bold sm:text-xl '>Profile & Settings</h1>
                    </div>
                </div>
                <div className="w-full h-full  p-1  ">
                    <div className="md:w-full md:h-full md:flex">
                        <div className="sm:w-full  md:w-3/5 h-full  p-1 flex justify-center">
                            <div className="w-[475px] h-[400px] bg-gray-100  border-2 border-black p-2 flex justify-center ">
                                <div className="w-full h-full ">
                                    <div className="w-full h-10  flex justify-end items-end">
                                        <div className="w-10  h-full  ">
                                            <h1 className=' text-3xl font-thin hover:shadow-lg hover:border' onClick={()=>{EditProfile()}}><TbEdit/></h1>
                                            </div> 
                                    </div>
                                    
                                    <div className="w-full h-64 flex justify-center items-end">
                                         <button className="w-32 h-10 t absolute border-2 border-black border-dashed bg-white bg-opacity-70 flex justify-center items-center"> <h1 className='font-bold text-black text-center ' onClick={()=>{setisProfileModalOpen(true)}}>Update profil</h1></button>
                                        
                                        <img src={user?.ProfileImage} alt="Profile Image" className='object-cover w-fit h-full' />
                                    </div>
                                    <div className="w-full h-20  p-1">
                                        <div className="w-full h-10  flex justify-center items-center">
                                            <h1 className='font-bold text-3xl text-center font-serif'>{user?.Username}</h1>
                                        </div>
                                            <div className="w-full h-8 mt-1  flex justify-center items-center ">
                                                <h1 className='font-sm font-semibold text-center'>{user?.Email}</h1>
                                            </div>
                                    </div>
                                </div>
                            {
                                    isProfileModalOpen &&
                                    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
                                        <div className="bg-white rounded-lg w-11/12 max-w-md mx-auto p-6 "  >
                                            
                                            <div className=" justify-between items-center mb-4">
                                                <div className="w-full h-10  flex justify-center items-center mb-1 border-2 border-black">
                                                    <h1 className='font-bold text-lg text-center '>Update Profile</h1>

                                                </div>
                                                <form action="">
                                                    <div className='w-full '>
                                                    <div className="w-full h-8 flex items-center">
                                                        <h1 className='font-semibold text-black ml-1'>Username<span className='font-semibold text-red-700 ml-1'>*</span></h1>
                                                    </div>
                                                        <input type="text"
                                                            onChange={ HandleUpdateUsername}
                                                            name='Username'
                                                            placeholder='Please Enter Your Username'
                                                            className='w-full h-10 border-black border-2 rounded-lg bg-transparent'
                                                            
                                                        />
                                                    </div>
                                                    <div className='w-full '>
                                                    <div className="w-full h-8 flex items-center">
                                                        <h1 className='font-semibold text-black ml-1'>Image<span className='font-semibold text-red-700 ml-1'>*</span></h1>
                                                    </div>
                                                    <div  className='w-full h-10 border-black border-2 border-dashed rounded-lg bg-transparent flex justify-center items-center font-bold text-lg' onClick={()=>{TakeClick()}}>Upload Profile Image</div>
                                                        <input type="file"
                                                             ref={ProfileRef}
                                                            onChange={handleFileChangesProfile}
                                                            name='Profile'
                                                            placeholder='Please Enter a Subcategory Name'
                                                            className='w-full h-10 border-black border-2 rounded-lg bg-transparent hidden'  
                                                        />
                                                    </div>
                                                    {/* <div className="w-full h-32 bg-yellow-100"></div> */}
                                                    <div className="w-full h-10  mt-2 flex gap-1 ">
                                                        <div className="w-1/2 h-10 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white flex justify-center items-center font-bold text-lg hover:cursor-pointer"  onClick={()=>setisProfileModalOpen(false)}>Cancel</div>
                                                        <div className="w-1/2 h-10 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white flex justify-center items-center font-bold text-lg hover:cursor-pointer" onClick={()=>{(handleSubmit())}} >Update</div>

                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                        <div className=" sm:w-full  md: w-4/5 h-full   p-1" >
                        <div className="w-full h-72  p-1 border-2 bg-gray-100 border-black">
                            <div className="w-full h-10 mt-3 p-1 flex gap-1 border border-black  hover:bg-black hover:text-white ">
                              <div className="w-16 h-full  flex justify-center items-center">
                                <h1 className='font-semibold text-3xl text-black  '><SiCoursera/></h1>
                              </div>
                              <div className="w-full h-full  flex justify-start items-center">
                              <h1 className='font-semibold text-xl p-1' >My course</h1>
                              </div>
                            </div>
                            <div className="w-full h-10 mt-3 p-1 flex gap-1 border border-black  hover:bg-black hover:text-white ">
                            <div className="w-16 h-full  flex justify-center items-center">
                                <h1 className='font-semibold text-3xl text-black'><TbLockCog/></h1>
                              </div>
                              <div className="w-full h-full  flex justify-start items-center">
                              <h1 className='font-semibold text-xl p-1' >Change Password</h1>
                              </div>
                            </div>
                            <div className="w-full h-10 mt-3 p-1 flex gap-1 border border-black  hover:bg-black hover:text-white " onClick={()=>{navigate("/Whishlist")}}>
                            <div className="w-16 h-full  flex justify-center items-center" >
                                <h1 className='font-semibold text-3xl text-black'><TbHeartPlus/></h1>
                              </div>
                              <div className="w-full h-full  flex justify-start items-center">
                              <h1 className='font-semibold text-xl p-1' >Whishlist</h1>
                              </div>
                            </div>
                            <div className="w-full h-10 mt-3  p-1 flex gap-1 border border-black hover:bg-black hover:text-white  ">
                            <div className="w-16 h-full  flex justify-center items-center">
                                <h1 className='font-semibold text-3xl text-black hover:text-white'><TiContacts/></h1>
                              </div>
                              <div className="w-full h-full  flex justify-start items-center">
                              <h1 className='font-semibold text-xl p-1' >Contact With Us</h1>
                              </div>
                            </div>
                            <div className="w-full h-10 mt-3  p-1 flex gap-1 border border-black hover:bg-black hover:text-white  ">
                            <div className="w-16 h-full  flex justify-center items-center">
                                <h1 className='font-semibold text-3xl text-black'><BiLogOut/></h1>
                              </div>
                              <div className="w-full h-full  flex justify-start items-center">
                              <h1 className='font-semibold text-xl p-1' onClick={handleLogout}>Logout</h1>
                              </div>
                            </div>
                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default UserProfile



