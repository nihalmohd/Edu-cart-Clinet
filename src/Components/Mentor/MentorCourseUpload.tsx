import React,{useRef} from 'react'
const MentorCourseUpload = () => {
    const ImageRef=useRef()
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
                                        <h1 className='font-bold' >Title <span className="text-red-700 flex-row">*</span></h1>
                                    </div>
                                    <div className="w-full h-1/2 bg-blue-500">
                                        <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter a Course Name' />
                                    </div>
                                </div>
                                <div className="w-full h-20 bg-yellow-200 ">
                                    <div className="w-[200px] h-8 bg-white flex justify-start items-center  ">
                                        <h1 className='font-bold' > Description <span className="text-red-700 flex-row">*</span></h1>
                                    </div>
                                    <div className="w-full h-1/2 bg-blue-500">
                                        <textarea className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter a Description' />
                                    </div>
                                </div>
                                <div className="w-full h-20 bg-yellow-300 flex ">
                                    <div className="w-1/2 h-20 bg-pink-200">
                                        <div className="w-[200px] h-8 bg-white flex justify-start items-center  ">
                                            <h1 className='font-bold' >Category <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full max-w-md border-2 border-black rounded-lg ">
                                            <div className="relative">
                                                <select
                                                    id="dropdown"
                                                    name="dropdown"
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
                                    <div className="w-1/2 h-20 bg-neutral-700">
                                        <div className="w-[200px] h-8 bg-white flex justify-start items-center  ">
                                            <h1 className='font-bold' >Sub Category <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full max-w-md border-2 border-black rounded-lg bg-transparent">
                                            <div className="relative">
                                                <select
                                                    id="dropdown"
                                                    name="dropdown"
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
                                <div className="w-full h-20 bg-yellow-400 flex ">
                                <div className="w-[150px] h-8 bg-white flex justify-start items-center  ">
                                            <h1 className='font-bold' >Thumbnail Image <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
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