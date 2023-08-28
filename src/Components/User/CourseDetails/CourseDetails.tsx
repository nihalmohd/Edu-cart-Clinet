import React from 'react'
import { useParams } from 'react-router-dom'
import {GiRoundStar} from "react-icons/gi"


const CourseDetail = () => {
  const { _id } = useParams()

  return (
    <div>
      <div className="w-full h-screen bg-slate-200 ">
        <div className="w-full h-72 bg-[#2d2f31] p-1 flex gap-1 ">
          <div className="w-3/5 h-full  pl-1 pr-1">
            <div className="w-2/3 h-8  flex justify-start items-center ">
              <h1 className='ml-7 p-1 text-white font-bold text-sm font-serif'>Category</h1>
              <h1 className="p-2 text-lg font-bold text-slate-400">
                &#62; 
              </h1>
              <h1 className='text-white font-bold text-sm font-serif '>Subcategory</h1>

            </div>
            <div className="w-full h-20  pl-4">
              <h1 className='text-white text-3xl font-bold font-serif underline '>100 Days of Code: The Complete Python Pro Bootcamp for 2023</h1>
            </div>
            <div className="w-full h-16  pl-4">
              <h1 className='font-semibold text-lg text-white'>Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</h1>
            </div>
            <div className="w-1/2 h-10  pl-4 flex  items-center">
              <h1 className='text-lg text-white font-semibold'><GiRoundStar/></h1>
              <h1 className='text-lg text-white font-semibold'><GiRoundStar/></h1>
              <h1 className='text-lg text-white font-semibold'><GiRoundStar/></h1>
              <h1 className='text-lg text-white font-semibold'><GiRoundStar/></h1>
              <h1 className='text-lg text-white font-semibold'><GiRoundStar/></h1>
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
                className="w-full h-full object-cover"
                autoPlay
                controls
                loop
                muted
              >
                <source src="https://educart-e-learning.s3.eu-north-1.amazonaws.com/Educart/istockphoto-1423666497-640_adpp_is.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail