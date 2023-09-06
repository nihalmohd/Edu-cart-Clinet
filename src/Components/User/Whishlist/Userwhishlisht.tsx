import React from 'react'
import { useNavigate } from 'react-router-dom'

const Userwhishlisht = () => {
    const navigate =useNavigate()
  return (
    <div>
        <div className="w-full h-full  p-2">
            <div className="w-full h-full  border-2 border-black p-2 flex gap-6">
                <div className="w-1/5 h-32 mt-1 bg-black border border-black">
                    <img src="https://educart-e-learning.s3.eu-north-1.amazonaws.com/Educart/1011936196-16178e0f5b21605b16ce5d8ecd959a2ebe46cae41fe230900c1e83e8131e3d03-d.jpg" alt="" className='w-full h-full object-cover' />
                </div>
                <div className="w-3/5 h-32  ">
                    <div className="w-full h-[70px] flex justify-start items-center">
                        <h1 className='font-serif font-bold text-3xl text-black underline'> 100 Days of Code: The Complete Flutter</h1>
                    </div>
                    <div className="w-full h-[60px] ">
                        <h1 className='font-semibold text-black text-sm '>EduCart is a cutting-edge web-based e-learning platform. With its scalable architecture, secure user authentication learning experience. Join us in transforming education for the digital age.</h1>
                    </div>

                </div>
                <div className="w-2/12 h-32  ">
                    <div className="w-full h-2/3  flex justify-center items-center">
                    <h1 className=' font-bold text-3xl text-black underline'>₹3999</h1>
                    </div>
                    
                    <button className='w-full h-10  font-bold bg-white border-2 border-black hover:bg-black hover:text-white hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg ' onClick={()=>navigate('/Paypal')}>Buy now</button>
                
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default Userwhishlisht