import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { GiRoundStar } from "react-icons/gi"
import { axiosIntance } from '../../../Api/config';
import CourseDisplay from '../Home/CourseDisplay';
import { BsTextIndentLeft } from "react-icons/bs"


interface Course {
  _id: string
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
  // MentorId : string;
  Status?: boolean;
  // User ?: [string];
  // stud ?: [{id:string,date:Date,month:string,fees:number}]
  // paymentStatus ?: boolean;
}

const CourseDetail = () => {
  const navigate = useNavigate()
  const { _id } = useParams()
  useEffect(() => {
    DisplayCourseDetails()
  }, [])
  const [courseDetails, setCourseDetails] = useState<Course>()

  const DisplayCourseDetails = async () => {
    const { data } = await axiosIntance.get("/CourseDeatailsByid", { params: { _id } })
    console.log(data);
    const { FoundedCourseByid } = data
    setCourseDetails(FoundedCourseByid)
  }
  return (
    <div >
      <div className="w-full h-full mb-2 ">
        <div className="w-full h-72 bg-[#2d2f31] p-1 flex gap-1 ">
          <div className="w-3/5 h-full  pl-1 pr-1">
            <div className="w-2/3 h-8  flex justify-start items-center ">
              <h1 className='ml-7 p-1 text-white font-bold text-sm font-serif'>{courseDetails?.SelectedCategory}</h1>
              <h1 className="p-2 text-lg font-bold text-slate-400">
                &#62;
              </h1>
              <h1 className='text-white font-bold text-sm font-serif '>{courseDetails?.SelectedSubCategory}</h1>

            </div>
            <div className="w-full h-20  pl-4">
              <h1 className='text-white text-3xl font-bold font-serif underline '>{courseDetails?.courseTitle}</h1>
            </div>
            <div className="w-full h-16  pl-4">
              <h1 className='font-semibold text-lg text-white'>{courseDetails?.courseDescription}</h1>
            </div>
            <div className="w-1/2 h-10  pl-4 flex  items-center">
              <h1 className='text-lg text-white font-semibold'><GiRoundStar /></h1>
              <h1 className='text-lg text-white font-semibold'><GiRoundStar /></h1>
              <h1 className='text-lg text-white font-semibold'><GiRoundStar /></h1>
              <h1 className='text-lg text-white font-semibold'><GiRoundStar /></h1>
              <h1 className='text-lg text-white font-semibold'><GiRoundStar /></h1>
              <h1> </h1>
              <h1 className='text-lg text-white font-semibold ml-5'>4.2</h1>

            </div>
            <div className="w-1/3 h-10 -100 pl-4 ">
              <h1 className='text-start font-semibold text-white'>Created By:Mentor</h1>
            </div>
          </div>
          <div className="w-2/5 h-full p-3 flex justify-center items-center">
            <div className="w-full h-full bg-white border-2 border-black">
              <video
                controls
                onContextMenu={(e) => e.preventDefault()}
                src={`${courseDetails?.DemoVideoLocation}`}
                className="w-full h-full object-cover"
                controlsList="nodownload"
                autoPlay
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-start gap-1 p-2">
        <div className="w-4/6 h-full  p-2 ">
          <div className="w-full h-full  border  border-black p-1  ">
            <div className="w-full h-10 flex justify-start items-center border-2 border-black">
              <h1 className='text-lg font-bold text-black ml-3 font-serif underline'>What you Learn with This Course</h1>
            </div>
            <div className="w-full h-fit ">
              <h1 className='font-semibold'>{courseDetails?.courseLearning}</h1>
            </div>
          </div>
          <div className="w-full h-full  mt-1 ">
            <div className="w-full h-full  border border-black p-1  ">
              <div className="w-full h-10 0 flex justify-start items-center border-2 border-black">
                <h1 className='text-lg font-bold text-black ml-3 font-serif underline'>Classes and Dutation</h1>
              </div>
              {
                courseDetails?.Class?.map((items) => (
                  <div className="w-full h-fit  mt-1 border border-black flex gap-3">
                    <div className="w-full h-full  flex justify-start items-center">
                      <h1 className='text-sm ml-1' >{items.classname}</h1>
                    </div>
                    <div className="w-2/6 h-full flex justify-center items-center">
                      <h1 className='text-sm text-blue-800 underline font-serif'>{items.classVideoLocation.length}</h1>
                    </div>
                  </div>
                )) 
              }
            </div>
          </div>
        </div>
        <div className="w-2/6 h-full  p-2 border-2 border-black bg-slate-300 " >
          <div className="w-full h-36 object-cover bg-red-300 border-2 border-black">
            <img src={courseDetails?.ThumbnailLocation} alt="Thumbnail" className='w-full h-full' />
          </div>
          <div className="w-full h-full  flex justify-center items-center">
            <h1 className='font-bold font-serif text-lg underline'>{courseDetails?.courseTitle}</h1>
          </div>
          <div className="w-full h-full  ">
            <div className="w-full h-full flex flex-justify-center items-center">
              <BsTextIndentLeft />
              <h1 className='font-bold text-sm ml-2'>{courseDetails?.courseIncludes}</h1>
            </div>
          </div>
          <div className="w-full h-full">

          <button className="w-full h-10 bg-white border-2 border-black text-black mt-2 font-bold text-lg hover:bg-black hover:text-white hover:cursor-pointer"onClick={()=>{navigate("/Paypal")}} >Purchase Course</button>
          <button className="w-full h-10 bg-white border-2 border-black text-black mt-2 font-bold text-lg hover:bg-black hover:text-white hover:cursor-pointer ">Add to whishlist</button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default CourseDetail