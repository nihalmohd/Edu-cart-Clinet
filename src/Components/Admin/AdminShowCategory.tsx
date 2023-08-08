import React from 'react'
import {BiEdit,BiBlock } from "react-icons/bi"
import {CgUnblock} from "react-icons/Cg"
import { IoMdAdd} from "react-icons/io"

const AdminShowCategory = () => {
    return (
        <>
        <div className="w-full h-full  flex-row p-2 border-dashed border-black border-2 m-1">
            <div className="w-full h-10 flex justify-center items-center">

            <div className="w-full h-10  border-2 border-black">
                <h1 className='text-center font-bold text-lg' >Educart Categories</h1>
            </div>
            </div>
         <div className="w-[160px] hover:bg-gray-300 border-2 bg-white border-black rounded-lg  mt-2 ml-2 p-2 ">
                    <div className="flex-row text-black">
                        <h2 className="text-xl font-bold ">Development</h2>
                        <p> Web Devlopment</p>
                        <p> Data Science</p>
                        <p>Mobile Development</p>
                        <p> SubCategory</p>
                        <p> SubCategory</p>

                        
                    </div>
                    <div className="flex-shrink-0 flex gap-2">
                        <div className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border  hover:bg-black hover:text-white ">
                        <IoMdAdd/>
                        </div>
                        <div className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border hover:bg-black hover:text-white ">
                        <BiEdit/>
                        </div>
                        <div className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border hover:bg-black hover:text-white ">
                        <BiBlock/>
                        </div>
                        {/* <div className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border hover:bg-black hover:text-white ">
                        <CgUnblock/>
                        </div> */}
                    </div>
                </div>
        </div>
        </>
    )
}

export default AdminShowCategory