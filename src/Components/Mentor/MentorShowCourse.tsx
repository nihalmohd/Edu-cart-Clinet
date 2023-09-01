import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { GiRoundStar } from 'react-icons/gi'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import {FcAbout} from "react-icons/fc"


const MentorShowCourse = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="w-full h-20  flex justify-end items-center pr-1">
                <div className="w-36 h-10 bg-transparent text-black border-2 border-black text-center flex justify-center items-center font-bold  hover:bg-black hover:text-white mr-3" onClick={() => { navigate("/Mentor/MentorCourseUpload") }} >Add Course</div>
            </div>
            <div className="w-full h-full  p-1">
                <div className="w-full h-full border-2 border-black p-1">
                        <div className="w-full h-10 bg-slate-200 border-2 border-black flex justify-center items-center">
                            <h1 className='text-black font-serif font-bold text-lg'>Coures are displaying on the mentor Mr/Mrs: <span className='text-blue-800 underline hover:cursor-pointer'>Nihal</span></h1>
                        </div>
                    <div className="w-full h-full p-1 grid grid-cols-5 gap-2 ">
                        <div className="w-full h-[390px] bg-gray-400 p-2 hover:shadow-2xl hover:cursor-pointer hover:translate-x-1 hover:translate-y-2">
                            <div className="w-full h-full bg-slate-50 p-2">
                                <div className="w-full h-[125px] bg-green-200">
                                    <img src="/" alt="" className='w-full h-full ' />
                                </div>
                                <div className="w-full h-14  mt-2 flex">
                                    <h1 className='text-bas font-serif font-bold underline'>100 days of code : Learn pyton with Nihal </h1>
                                </div>
                                <div className="w-full h-8 mb-1 flex">
                                    <div className='w-1/2 h-full  flex items-center'>
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                        <GiRoundStar />
                                    </div>
                                    <div className='w-1/2 h-8 flex items-center justify-center'>
                                        <h1 className='text-xs font-semibold text-stone-500 text-start'>4.3</h1>
                                    </div>
                                </div>
                                <div className="w-full h-5 flex items-center justify-start">
                                    <h1 className='text-center font-semibold text-stone-500 text-xs'>Mr:Mentor</h1>
                                </div>
                                <div className="w-full h-10 flex justify-start items-center">
                                    <h1 className='font-semibold text-lg text-black'>₹3999</h1>
                                </div>
                                <div className='w-full h-16 p-1 flex gap-2'>
                                    <button className='bg-transparent border-2 border-black text-black w-full h-12 font-semibold text-2xl  hover:bg-black hover:text-white mt-2 flex justify-center items-center'><IoMdAdd /></button>
                                    <button className='bg-transparent border-2 border-black text-black w-full h-12 font-semibold text-2xl  hover:bg-black hover:text-white mt-2 flex justify-center items-center'><BiEdit /></button>
                                    <button className='bg-transparent border-2 border-black text-black w-full h-12 font-semibold text-2xl  hover:bg-black hover:text-white mt-2 flex justify-center items-center'><FcAbout/></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorShowCourse