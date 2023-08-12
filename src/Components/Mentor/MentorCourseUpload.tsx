import React from 'react'

const MentorCourseUpload = () => {
    return (
        <div>
            <div className="w-full h-screen bg-gray-300 flex">
                <div className="w-1/2 h-full bg-red-300 p-2 ">
                    <div className="w-full h-[480px] bg-violet-200  border-dotted border-2 border-black p-2">
                        <div className="w-full h-10 bg-transparent flex justify-center items-center border-2 border-black ">
                            <h1 className='text-center text-3xl font-bold text-black font-serif'>Course upload</h1>
                        </div>
                        <div className="w-full h-96 bg-gray-100 mt-1 p-1">
                            <div className="w-full h-full bg-green-200 p-1">
                                <div className="w-full h-20 bg-yellow-100 ">
                                    <div className="w-[150px] h-8 bg-white flex justify-start items-center  ">
                                        <h1 className='font-bold' >Coursename <span className="text-red-700 flex-row">*</span></h1>
                                    </div>
                                    <div className="w-full h-1/2 bg-blue-500">
                                        <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter a Course Name' />
                                    </div>
                                </div>
                                <div className="w-full h-20 bg-yellow-200 ">
                                    <div className="w-[200px] h-8 bg-white flex justify-start items-center  ">
                                        <h1 className='font-bold' >Course Description <span className="text-red-700 flex-row">*</span></h1>
                                    </div>
                                    <div className="w-full h-1/2 bg-blue-500">
                                        <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter a Description' />
                                    </div>
                                </div>
                                <div className="w-full h-20 bg-yellow-300 flex ">
                                div.w-1/2.h-16.bg-
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-full bg-yellow-300"></div>
            </div>
        </div>
    )
}

export default MentorCourseUpload