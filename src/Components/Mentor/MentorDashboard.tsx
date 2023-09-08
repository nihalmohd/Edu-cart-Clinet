import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { axiosIntance } from '../../Api/config'


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



const MentorDashboard = () => {
const [CourseByname,setCoursebyname] = useState<Course[]>()

    useEffect(()=>{
        TakeCourse()
    },[])

    const { Username } = useSelector((state: any) => state.Mentor)
    const Mentorname = Username

    const TakeCourse = async () => {
        const { data } = await axiosIntance.get("/Mentor/MentorTakeCourseByName", { params: { Mentorname } })
        const { FoundedCourseByName } = data
        setCoursebyname(FoundedCourseByName)
        console.log(data, "this is Course by mentor name");

    }
    
  return (
    <div>
        <div className="w-full  h-ful p-2 mt-3">
            <div className="w-full  h-40 p-1 flex gap-3  ">
                <div className="w-1/4 h-full bg-gray-200 hover:translate-x-1 hover:translate-y-1 shadow-2xl border border-black">
                    <div className="w-full h-1/2  flex justify-center items-center">
                        <h1 className='font-serif text-2xl font-bold underline ' >Edcuart Courses</h1>
                        
                    </div>
                    <div className="w-full h-1/2  flex justify-center items-start">
                        <h1 className='font-serif text-2xl font-bold underline ' >{CourseByname?.length}</h1>
                        
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default MentorDashboard