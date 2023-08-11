import React, { useState,useEffect, FormEvent } from 'react'
import AdminShowCategory from './AdminShowCategory'
import { axiosIntance } from '../../Api/config'

interface category {
    Category: string,
    SubCategory: string
}

const AdminAddCategory = () => {
    const [Category, setCategory] = useState<category>({
        Category: "",
        SubCategory: ""
    }) 
    const handleAddCategory=async(e:FormEvent)=>{
        e.preventDefault()
        try {
            const {data} = await axiosIntance.post("/Admin/AdminCategory",{...Category})
            console.log(data);       
        } catch (error) {
           console.log(error);   
        }
    }
     
    return (
        <>
            <div className="w-full  flex p-1 sm:flex justify-center items-center">
                <div className='w-3/4  flex justify-center p-3 '>
                    <div className='w-3/4 h-3/4  border-dotted border-2 border-black  p-2'>
                        <h1 className='text-lg font-bold text-center'>Admin Category</h1>
                        <div className='w-2/5 h-6  mb-2  '>
                            <h1 className='text-center' >Category<span className="text-red-700 flex-row">*</span></h1>
                        </div>
                        <form action="">
                            <div className='w-full flex justify-center mb-1'>
                                <input type="text"
                                    name='Category'
                                    onChange={(e) =>  setCategory({ ...Category, [e.target.name]: e.target.value })}
                                    placeholder='Please Enter a category Name'
                                    className='w-3/4 h-10 border-black border-2 rounded-lg bg-transparent'
                                />
                            </div>
                            <div className='w-2/5 h-6  mb-2  '>
                                <h1 className='text-center' >Subcategory<span className="text-red-700 flex-row">*</span></h1>
                            </div>
                            <div className='w-full flex justify-center'>
                                <input type="text"
                                    onChange={(e) => setCategory({ ...Category, [e.target.name]: e.target.value })}
                                    name='SubCategory'
                                    placeholder='Please Enter a Subcategory Name'
                                    className='w-3/4 h-10 border-black border-2 rounded-lg bg-transparent'
                                />
                            </div>
                            <div className="w-full h-10 flex justify-center items-center">
                                <button className='w-28 h-10 bg-black rounded-lg text-white mt-2'onClick={handleAddCategory} >Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
                <AdminShowCategory />
            </div>
        </>



    )
}

export default AdminAddCategory

