import React, { useEffect, useState } from 'react'
import { axiosIntance } from '../../../Api/config'
import { useNavigate } from 'react-router-dom';

interface Course {
    _id: string;
    courseTitle: string;
    courseDescription: string;
    courseLearning: string;
    courseIncludes: string;
    coursePrice: number;
    ThumbnailLocation: string;
    SelectedCategory: string;
    SelectedSubCategory: string;
    DemoVideoLocation: string;
    Class?: [{ classVideoLocation: string; classname: string; ClassDescription: string }];
    Mentorname: string;
    Status?: boolean;
  }
  

interface User {
    _id:string;
    Username:string;
    Email:string;
    Password:string;
    ProfileImage:string
    courses:[Course]
}


const UserMycourse = () => {
const navigate = useNavigate()
const [coursdetails,setCourseDetails] = useState<User>()

 useEffect(()=>{
    FetchCourse()
 },[])


 const FetchCourse =async () =>{
    const {data} = await axiosIntance.get('/TakeMycourses')
    if(data){
        console.log(data);
        const {FoundedMycourse} = data
        console.log(FoundedMycourse);
        setCourseDetails(FoundedMycourse)
        console.log(FoundedMycourse, "this is my course");  
    }
 }
  return (
    <div>
        <div className="w-full h-screen  p-1">
            {
                coursdetails?.courses.map((items)=>(

            <div className="w-full h-36  border-2 border-black mt-2 ">
                <div className="w-full h-full p-2 flex gap-4">
                <div className="w-1/5 h-28 bg-green-100 border border-black flex justify-center items-center ">
                    <img className='w-full h-full object-cover' src={items.ThumbnailLocation} alt="No image is avalible there" />
                </div>
                <div className="w-7/12 h-full  p-1">
                <div className="w-full h-[64px] ">
                    <h1 className='font-serif font-bold text-black text-3xl underline'>{items.courseTitle}</h1>
                </div>
                <div className="w-full h-[52px] ">
                    <h1 className=' font-semibold text-black text-sm '>{items.courseDescription}</h1>
                </div>
                </div>
                <div className="w-1/5 h-full ">
                    <div className="w-full h-20  flex justify-center items-center">
                    <h1 className='font-serif font-semibold text-black text-3xl underline'>₹{items.coursePrice}</h1>
                    </div>
                    <button className="w-full h-11 border-2 border-black flex justify-center items-center hover:bg-black hover:text-white hover:shadow-lg hover:cursor-pointer ">
                          <h1 className='font-semibold font-sm ' onClick={()=>{navigate(`/showCourse/${items._id}`)}}>View Detailas</h1>
                    </button>
                </div>
                </div>
            </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default UserMycourse