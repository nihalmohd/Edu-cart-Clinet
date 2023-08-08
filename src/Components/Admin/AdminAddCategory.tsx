import React from 'react'
import AdminShowCategory from './AdminShowCategory'

const AdminAddCategory = () => {
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
                            <div className='w-full flex justify-center'>
                                <input type="text"
                                    placeholder='Please Enter a category Name'
                                    className='w-3/4 h-10 border-black border-2 rounded-lg bg-transparent'
                                />
                            </div>
                            <div className="w-full h-10 flex justify-center items-center">
                                <button className='w-28 h-10 bg-black rounded-lg text-white mt-2'>Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-full h-full flex justify-center items-center'>
            <AdminShowCategory/>
            </div>
        </>



    )
}

export default AdminAddCategory

