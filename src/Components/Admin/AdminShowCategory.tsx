import React, { FormEvent, useEffect, useState } from 'react'
import { BiEdit, BiBlock } from "react-icons/bi"
import { CgUnblock } from "react-icons/Cg"
import { IoMdAdd } from "react-icons/io"
import { axiosIntance } from '../../Api/config'
import { Input } from "@material-tailwind/react";

interface Category {
    Category: string
    Subcategory: [string]
    _id: string
    Status: boolean
}


const AdminShowCategory = () => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
    const [category, setCategory] = useState<Category[]>([])
    const [Subcategory, setSubcategory] = useState<string>("")

     console.log(Subcategory,"kjslkdjflksdjflksdjflkj");
     

    useEffect(() => {
        handleDisplayCategories()
    }, [])

     const handleDisplayCategories = async () => {
        const { data } = await axiosIntance.post("/Admin/AdminDisplayCategory")
        console.log(data);
        const { FoundedCategroy } = data
        setCategory(FoundedCategroy)
    }
    const HandleBlockCategory = async (_id: string) => {
        const { data } = await axiosIntance.post("/Admin/AdminBlockCategory", { _id })
        if (data) {
            handleDisplayCategories()
        }
    }
    const HandleUnBlockCategory = async (_id: string) => {
        const { data } = await axiosIntance.post("/Admin/AdminUnBlockCategory", { _id })
        if (data) {
            handleDisplayCategories()
        }
    }

    const openPaymentModal = () => {
        setIsPaymentModalOpen(true);
    }; 

    const closePaymentModal =async (_id: string) => {
         const {data} =await axiosIntance.post("/Admin/AdminAddSubcategory",{_id,Subcategory})
         console.log(data);
         
         if(data){  
        setIsPaymentModalOpen(false);
        handleDisplayCategories()
        }
    };
    return (
        <>
            <div className="w-full h-full  p-2 border-dashed border-black border-2 m-1">
                <div className="w-full h-10 flex justify-center items-center">
                    <div className="w-full h-10  border-2 border-black">
                        <h1 className='text-center font-bold text-lg' >Educart Categories</h1>
                    </div>
                </div>
                <div className="flex">
                    {
                        category.map((items) =>

                            <div className={`${items.Status ? "w-[160px] hover:bg-gray-300 border-2 bg-white border-black rounded-lg  mt-2 ml-2 p-2" : "w-[160px] hover:bg-gray-300 border-2 bg-red-400  border-black rounded-lg  mt-2 ml-2 p-2"} `}>
                                <div className="flex-row text-black">
                                    <h2 className="text-xl font-bold ">{items.Category}</h2>
                                    {
                                        items.Subcategory.map((item) =>
                                            <p >{item}</p>
                                        )
                                    }
                                </div>
                                <div className="flex-shrink-0 flex gap-2">
                                    <div className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border  hover:bg-black hover:text-white " onClick={openPaymentModal} >
                                        <IoMdAdd />
                                    </div>
                                    <div className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border hover:bg-black hover:text-white ">
                                        <BiEdit />
                                    </div>
                                    {
                                        items.Status ?
                                            <div className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border hover:bg-black hover:text-white" onClick={() => HandleBlockCategory(items._id)} >
                                                <BiBlock />
                                            </div> :
                                            <div className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border hover:bg-black hover:text-white " onClick={() => HandleUnBlockCategory(items._id)} >
                                                <CgUnblock />
                                            </div>
                                    }
                                </div>
                                {
                                    isPaymentModalOpen &&
                                    <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
                                        <div className="bg-white rounded-lg w-11/12 max-w-md mx-auto p-6">
                                            <div className=" justify-between items-center mb-4">
                                                <div className="w-full h-10  flex justify-center items-center mb-1 border-2 border-black">
                                                    <h1 className='font-bold text-lg text-center '>Add SubCategory</h1>

                                                </div>
                                                <form action="">
                                                    <div className='w-full flex justify-center items-center'>
                                                        <input type="text"
                                                            onChange={(e) => setSubcategory(e.target.value)}
                                                            name='SubCategory'
                                                            placeholder='Please Enter a Subcategory Name'
                                                            className='w-3/4 h-10 border-black border-2 rounded-lg bg-transparent'
                                                        />
                                                        <button className='w-28 h-10 bg-black rounded-lg text-white ml-1' onClick={()=>closePaymentModal(items._id)} >Upload</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>

                        )
                    }
                </div>
            </div>

        </>
    )
}

export default AdminShowCategory