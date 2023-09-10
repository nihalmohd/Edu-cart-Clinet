import React, { useEffect } from 'react'
import { axiosIntance } from '../../../Api/config'

const UserMycourse = () => {

 useEffect(()=>{
    FetchCourse()
 },[])


 const FetchCourse =async () =>{
    const {data} = await axiosIntance.get('/TakeMycourses')
    if(data){
        console.log(data);
        const {FoundedMycourse} = data
        console.log(FoundedMycourse, "this is my course");  
    }
 }
  return (
    <div>
        <div className="w-full h-screen  p-1">
            <div className="w-full h-36  border-2 border-black mt-2 ">
                <div className="w-full h-full p-2 flex gap-4">
                <div className="w-1/5 h-28 bg-green-100 border border-black flex justify-center items-center ">
                    <img className='w-full h-full object-cover' src="https://educart-e-learning.s3.eu-north-1.amazonaws.com/Educart/1011936196-16178e0f5b21605b16ce5d8ecd959a2ebe46cae41fe230900c1e83e8131e3d03-d.jpg" alt="No image is avalible there" />
                </div>
                <div className="w-7/12 h-full  p-1">
                <div className="w-full h-[64px] ">
                    <h1 className='font-serif font-bold text-black text-3xl underline'>100 Days of Code: The Complete Flutter</h1>
                </div>
                <div className="w-full h-[52px] ">
                    <h1 className=' font-semibold text-black text-sm '>EduCart is a cutting-edge web-based e-learning platform. With its scalable architecture, secure user authentication learning experience. Join us in transforming education for the digital age.</h1>
                </div>
                </div>
                <div className="w-1/5 h-full ">
                    <div className="w-full h-20  flex justify-center items-center">
                    <h1 className='font-serif font-semibold text-black text-3xl underline'>₹2999</h1>
                    </div>
                    <button className="w-full h-11 border-2 border-black flex justify-center items-center hover:bg-black hover:text-white hover:shadow-lg hover:cursor-pointer ">
                          <h1 className='font-semibold font-sm '>View Detailas</h1>
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserMycourse