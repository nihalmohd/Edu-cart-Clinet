import { useEffect, useState } from 'react';
import { FaRegHeart,FaShoppingCart } from 'react-icons/fa'
import { GrNotification } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../Redux/Slice/UserSlice';
import { axiosIntance } from '../../../Api/config';
import {CiSquareRemove} from "react-icons/ci"




interface Course {
  _id:string
  courseTitle: string;
  courseDescription: string;
  courseLearning: string
  courseIncludes: string
  coursePrice: number;
  ThumbnailLocation: string;
  SelectedCategory: string;
  SelectedSubCategory: string;
  DemoVideoLocation: string;
  Class?: [{ classVideoLocation: string, classname: string, ClassDescription: string }];
  Mentorname:string;
  Status?: boolean;
  // User ?: [string];
  // stud ?: [{id:string,date:Date,month:string,fees:number}]
  // paymentStatus ?: boolean;
}


const Nav = () => {
  const [value,setValue] =useState<String>("")
  useEffect(()=>{
    if(value?.trim()!==""){
      setseracdiv(true)
    }else{
      setseracdiv(false)
    }
  },[value])

  useEffect(()=>{
    const DisplayCourse = async () => {
      const { data } = await axiosIntance.get("/showCourse")
      console.log(data);
      if (data) {
        const { Getcourse } = data
        setCourse(Getcourse)
      }
    }
    DisplayCourse()
  },[])

  const [course,setCourse] =useState<Course[]>()
  const [searchdiv,setseracdiv] = useState(false)
  const Dispatch = useDispatch()
  const navigate=useNavigate()
  const [showDropdown,SetshowDropdown]= useState<boolean>(false)

  const handleLogout=()=>{
   const User= localStorage.removeItem("User")
   Dispatch(logoutUser())
   navigate("/Login")
   console.log(User);
  }
  const serchCourse =(e:React.ChangeEvent<HTMLInputElement>) =>{ 
    setValue(e.target.value)
    console.log(value);
    const FileredCours = course?.filter(course=>{
      return course.courseTitle.toLowerCase().includes(value as string)
        ||course.courseTitle.toLocaleUpperCase().includes(value as string)
        || course.coursePrice.toString().includes(value as string)
        ||course.Mentorname.toLocaleLowerCase().includes(value as string)
    })
    setCourse(FileredCours)
}
console.log(course);

  return (
    <div className="flex flex-col justify-center w-full   z-50 bg-white">
      <div className="w-full h-20 sm:h-[65px] flex justify-between border shadow-lg border-b ">
        
        <img className="h-full hover:cursor-pointer " src="/Images/Untitled-1-01.png" alt="Logo" onClick={()=>{navigate("/")}} />

        
        <div className="hidden sm:flex items-center hover:cursor-pointer">
          <span className="mr-4 text-black"onClick={()=>{navigate('/Category')}}>Category</span>
        </div>

        
        <div className="hidden sm:flex items-center w-3/4 sm:w-2/6 relative" >
          <input 
          onChange={serchCourse}
            type="text"
            placeholder="Search for anything"
            className="w-full p-2  border border-black rounded-3xl "
          />
        </div>
          {
            searchdiv?( 

            <div className="w-full h-4/6  fixed mt-16 z-50  flex justify-center items-center">
          
            <div className="w-2/4 h-full bg-white mr-20 p-2 overflow-auto shadow-lg  ">
              <div className="w-full h-10  flex justify-end items-center ">
                <div className="w-10 h-full  flex justify-center items-center"onClick={()=>{setseracdiv(false)}} >
                  <h1 className='font-bold text-4xl text-black'>
                    <CiSquareRemove/>
                  </h1>
                </div>
              </div>
            {
                course?.map((items)=>(
              <div className="w-full  h-24  mt-1 p-1 border-2 border-black" onClick={()=>navigate(`/showCourse/${items._id}`)}>
                <div className="w-full h-full flex gap-1 ">
                  <div className="w-40 h-full ">
                    <img src={items.ThumbnailLocation} className='w-full h-full object-cover' alt="no image founded" />
                  </div>
                  <div className="w-full h-full ">
                    <div className="w-full h-1/2  flex   items-center">
                      <h1 className='font-serif font-bold text-black ml-1 underline'>{items.courseTitle}</h1>
                    </div>
                    <div className="w-full h-1/2  overflow-hidden">
                      <h1 className='font-semibold text-sm text-black ml-1' >{items.courseDescription}</h1>
                    </div>
                  </div>
                </div>
              </div>
                ))
              }
            </div>
          </div>):(<></>)
           
          }
        
        <div className="hidden sm:flex items-center gap-2">
          <span className="mx-4 text-black hover:cursor-pointer">Mentors</span>
          <span className="mx-4 text-black hover:cursor-pointer"onClick={()=>{navigate('/Mycourses')}}>My Course</span>
        </div>

        
        {/* <div className="hidden sm:flex items-center" onClick={()=>navigate('/Whishlist')}>
          <FaRegHeart/>
        </div> */}
       
        <div className="hidden sm:flex items-center hover:cursor-pointer">
          <GrNotification/>
        </div>

       
        <div className="hidden sm:flex items-center hover:cursor-pointer">
          <img
            className="h-8 w-8 rounded-3xl border border-black mr-2"
            src="\Images\profile-icon-png-910.png"
            alt="User Profile" onClick={()=>{SetshowDropdown(!showDropdown)}}
          />
        </div>
        {showDropdown ? (
              <div className="absolute right-0 mt-20 w-40  bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                <ul >
                  <li className="px-4 py-2 hover:bg-gray-100  hover:cursor-pointer" onClick={()=>{navigate("/Profile")}}>My Profile</li>
                  <li className="px-4 py-2 hover:bg-gray-100 hover:cursor-pointer" onClick={handleLogout}  >Logout</li>
                </ul>
              </div>
            ):<></>}
      </div>
    </div>
  )
}

export default Nav;

