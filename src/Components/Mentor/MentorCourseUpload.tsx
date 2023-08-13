import React, { useRef } from 'react'


interface ImageRef {

}

import { IoIosCloudOutline, IoMdCloudOutline } from "react-icons/io"
const MentorCourseUpload = () => {
    const ImageRef = useRef<HTMLInputElement>(null)
    const videoRef = useRef<HTMLInputElement>(null)
    const Classvideoref = useRef<HTMLInputElement>(null)

    const HandleImageClick = () => {
        if (ImageRef.current) {
            ImageRef.current.click()
        }
    }
    const HandleVideoClick = () => {
        if (videoRef.current) {
            videoRef.current.click()
        }
    }
    const HandleClassVideoClick = () => {
        if (Classvideoref.current) {
            Classvideoref.current.click()
        }
    }

    return (
        <div>
            <form action="">
                <div className="w-full h-screen md:flex ">
                    <div className="md:w-1/2 h-[700px] p-2 sm:w-full ">
                        <div className="w-full h-[680px] border-dotted border-2 border-black p-2">
                            <div className="w-full h-10 flex justify-center items-center border-2 border-black ">
                                <h1 className='text-center text-3xl font-bold text-black font-serif'>Course upload</h1>
                            </div>

                            <div className="w-full h-[620px] mt-1 p-1">
                                <div className="w-full h-full  p-1">
                                    <div className="w-full h-20  ">
                                        <div className="w-[150px] h-8 flex justify-start items-center  ">
                                            <h1 className='font-bold' >Title <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full h-1/2 ">
                                            <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter a Course Name' name='Title' />
                                        </div>
                                    </div>
                                    <div className="w-full h-20 ">
                                        <div className="w-[200px] h-8 flex justify-start items-center  ">
                                            <h1 className='font-bold' > Description <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full h-1/2 ">
                                            <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter a Description' name='Description' />
                                        </div>
                                    </div>
                                    <div className="w-full h-20 ">
                                        <div className="w-[300px] h-8 flex justify-start items-center  ">
                                            <h1 className='font-bold' >What you learn with this course <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full h-1/2 ">
                                            <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder=' eg:-Build multiple demo projects & explore realistic examples ' name='Lerning' />
                                        </div>
                                    </div>
                                    <div className="w-full h-20  ">
                                        <div className="w-[250px] h-8  flex justify-start items-center  ">
                                            <h1 className='font-bold' >This course Includes <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full h-1/2 ">
                                            <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='eg:-Certificate of completion' name='Includes' />
                                        </div>
                                    </div>
                                    <div className="w-full h-20 flex">
                                        <div className="w-full h-20 ">
                                            <div className="w-[100px] h-8 flex justify-start items-center  ">
                                                <h1 className='font-bold' >Price <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="full h-1/2  mr-1">
                                                <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter a Course Name' name='price' />
                                            </div>

                                        </div>
                                        <div className="w-full h-20 ">
                                            <div className="w-[150px] h-8  flex justify-start items-center  ">
                                                <h1 className='font-bold' >Thumbnail Image <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full h-1/2 bg-gray-300 border-2 border-dashed border-black flex justify-center items-center" onClick={HandleImageClick}>
                                                <h1 className='font-serif text-base text-center'>Unpload your thumbnail image</h1>
                                                <input type="file" ref={ImageRef} name='Image' className='hidden' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-20  flex ">
                                        <div className="w-1/2 h-20 ">
                                            <div className="w-[200px] h-8  flex justify-start items-center  ">
                                                <h1 className='font-bold' >Category <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full max-w-md border-2 border-black rounded-lg ">
                                                <div className="relative">
                                                    <select
                                                        id="dropdown"
                                                        name="category"
                                                        className="block appearance-none w-full bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring"
                                                    >
                                                        <option value="option1">Option 1</option>
                                                        <option value="option2">Option 2</option>
                                                        <option value="option3">Option 3</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg
                                                            className="fill-current h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M14.65 5.65a1 1 0 011.41 1.41l-4 4a1 1 0 01-1.41 0l-4-4a1 1 0 111.41-1.41L10 9.18l4.65-4.65z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 h-20 ">
                                            <div className="w-[200px] h-8  flex justify-start items-center  ">
                                                <h1 className='font-bold' >Sub Category <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full max-w-md border-2 border-black rounded-lg bg-transparent">
                                                <div className="relative">
                                                    <select
                                                        id="dropdown"
                                                        name="subCategory"
                                                        className="block appearance-none w-full bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring"
                                                    >
                                                        <option value="option1">Option 1</option>
                                                        <option value="option2">Option 2</option>
                                                        <option value="option3">Option 3</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg
                                                            className="fill-current h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M14.65 5.65a1 1 0 011.41 1.41l-4 4a1 1 0 01-1.41 0l-4-4a1 1 0 111.41-1.41L10 9.18l4.65-4.65z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-28 ">
                                        <div className="w-[150px] h-8  justify-start items-center  ">
                                            <h1 className='font-bold' >Demo Video <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full h-20  border-2 bg-gray-200 border-dashed border-slate-800 flex justify-center items-center " onClick={HandleVideoClick}  >
                                            <div className="w-[full]-h-[full]  flex gap-2">
                                                <h1 className='text-gray-500 text-xl  font-serif'>Upload your Demo Video Here </h1>
                                            </div>
                                            <div className="  h-5 ">
                                                Image
                                            </div>
                                            <input className='hidden' ref={videoRef} type="file" name='DemoVideo'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="md:w-1/2 h-[700px] p-2">
                        <div className="w-full h-2/3  border-2 border-dotted border-black p-2">
                            <div className="w-full h-10  border-2 border-black flex justify-center items-center">
                                <h1 className='text-center text-3xl font-bold text-black font-serif'>Class upload</h1>
                            </div>
                            <div className="w-full h-[400px] p-1">
                                <div className="w-full h-[390px]  flex ">
                                    <div className="w-full h-20">
                                        <div className="w-full h-20 ">
                                            <div className="w-1/4 h-8 flex justify-start items-center">
                                                <h1 className='font-bold' >Class Name <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full h-1/2  ">
                                                <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter Class Name' name='Classname' />
                                            </div>
                                        </div>
                                        <div className="w-full h-20 ">
                                            <div className="w-1/4 h-8 flex justify-start items-center">
                                                <h1 className='font-bold' >Discription <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full h-1/2 ">
                                                <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Class Description' name='Classdescription' />
                                            </div>
                                        </div>
                                        <div className="w-full h-[120px] p-1">
                                            <div className="w-1/4 h-8 flex justify-start items-center">
                                                <h1 className='font-bold' >Class Video <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full h-20  border-dashed border-2 border-black flex justify-center items-center" onClick={HandleClassVideoClick} >
                                                <input type="file" ref={Classvideoref} className='hidden' name='VideoClass' />
                                                <div className="w-[full]-h-[full]  flex gap-2">
                                                    <h1 className='text-gray-500 text-xl  font-serif'>Upload your Class Video Here </h1>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="w-full h-16  flex items-center">
                                            <div className="w-full h-1/2 flex justify-center items-center">
                                                <button className='w-3/6 h-10 bg-black text-white font-bold hover:border-2 hover:bg-white hover:text-black hover:border-black '>Upload </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MentorCourseUpload