import React, { useEffect, useState } from 'react'
import { FaRegHeart} from 'react-icons/fa'
import {GiRoundStar} from "react-icons/gi"
import { useNavigate } from 'react-router-dom'
import { axiosIntance } from '../../Api/config'
import AdminCourses from '../../Pages/Admin/AdminCourses'

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
    Mentorname : string;
    Status?: boolean;
    // User ?: [string];
    // stud ?: [{id:string,date:Date,month:string,fees:number}]
    // paymentStatus ?: boolean;
  }
  

const AdminDisplayCourses = () => {
    const navigate = useNavigate()
    const [Admincourse, setAdminCourse] = useState<Course[]>()
    const [CourseManagment,SetCourseManagment] = useState<boolean>(true)
    useEffect(() => {
      DisplayCourse()
    }, [CourseManagment])
  
    const DisplayCourse = async () => {
      const { data } = await axiosIntance.get("/Admin/AdminDisplayCourse")
      console.log(data);
      if (data) {
        const { Getcourse } = data
        setAdminCourse(Getcourse)
      }
    }
    const HandleBlockCourse = async(_id:string) =>{
        console.log("clicking is over");
 
     const {data} = await axiosIntance.post("/Admin/AdminCourseVisible",{_id})
     SetCourseManagment(false)
     console.log(data);
     
    } 
    const HandleUnblockCourse = async(_id:string) =>{
    const {data} = await axiosIntance.post ("/Admin/AdminCourseInvisible",{_id})
    SetCourseManagment(true)
    console.log(data);
    
    }
  return (
    <div>
        <div className='p-2'>
      <div className="w-full h-full bg-slate-200 rounded-lg ">
        <div className="w-full h-16  flex items-center p-2">
          <h1 className='text-2xl font-serif font-bold underline'>Educart All Courses</h1>
        </div>
        <div className="w-full h-full p-1 grid grid-cols-5 gap-2">
        {
          Admincourse?.map((items) => (       
                <div className="w-full h-[425px] bg-gray-400 p-2 hover:shadow-2xl hover:cursor-pointer hover:translate-x-1 hover:translate-y-2">
                  <div className={`${items.Status?"w-full h-full bg-slate-50 p-2":"w-full h-full bg-red-400 p-2"}`}>
                    <div className="w-full h-[125px] bg-green-200 border-2 border-black">
                      <img src={items.ThumbnailLocation} alt="" className='w-full h-full ' />
                    </div>
                    <div className="w-full h-14  mt-2 flex">
                      <h1 className='text-bas font-serif font-bold underline'>{items.courseTitle} </h1>
                    </div>
                    <div className="w-full h-8 mb-1 flex">
                      <div className='w-1/2 h-full  flex items-center'>
                      <GiRoundStar/>
                      <GiRoundStar/>
                      <GiRoundStar/>
                      <GiRoundStar/>
                      <GiRoundStar/>
                      </div>
                      <div className='w-1/2 h-8 flex items-center justify-center'>
                        <h1 className='text-xs font-semibold text-stone-500 text-start'>4.3</h1>
                      </div>
                    </div>
                    <div className="w-full h-5 flex items-center justify-start">
                      <h1 className='text-center font-semibold text-stone-500 text-xs'>Mr:{items.Mentorname}</h1>
                    </div>
                    <div className="w-full h-10 flex justify-start items-center">
                      <h1 className='font-semibold text-lg text-black'>₹{items.coursePrice}</h1>
                    </div>
                    <div className='w-full h-16 p-1 '>
                      <button className='bg-transparent border-2 border-black text-black w-full h-12 font-semibold text-lg  hover:bg-black hover:text-white '>View Details</button>
                      {
                        items.Status?
                        <button className='bg-transparent border-2 border-black text-black w-full h-12 font-semibold text-lg  hover:bg-black hover:text-white mt-2' onClick={()=>{HandleBlockCourse(items._id)}}>Invisible</button>
                        :
                      <button className='bg-transparent border-2 border-black text-black w-full h-12 font-semibold text-lg  hover:bg-black hover:text-white mt-2'onClick={()=>{HandleUnblockCourse(items._id)}}>visible</button>
                    }
                      
                     
                    </div>
                  </div>
              </div>  
          ))
        }
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdminDisplayCourses