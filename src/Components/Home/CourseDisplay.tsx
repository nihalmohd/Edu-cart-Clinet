import React from 'react'

const CourseDisplay = () => {
  return (
    <div>
      <div className="w-full h-[550px] bg-slate-200 rounded-lg ">
        <div className="w-full h-16  flex items-center p-2">
          <h1 className='text-2xl font-serif font-bold underline' >Most Popular Courses</h1>
        </div>
        <div className="w-full h-[400px] bg-gray-100 p-3 flex gap-3">

        <div className="w-1/4 h-[375px] bg-gray-400 p-2 hover:shadow-2xl hover:cursor-pointer hover:translate-x-2 hover:translate-y-2">
          <div className="w-full h-full bg-yellow-200 p-2">
             <div className="w-full h-[125px] bg-green-200 border-2 border-black">
             <img src="\Images\technical-studies-1.jpg" alt="" className='w-full h-full ' />
             </div>
             <div className="w-full h-14 bg-green-100 mt-2">
               <h1 className='text-bas font-serif font-bold underline'>Learn javascript with Educart build your cariyer </h1>
             </div>
          </div>

        </div>
        <div className="w-1/4 h-[375px] bg-gray-400 p-2 hover:shadow-2xl hover:cursor-pointer hover:translate-x-1 hover:translate-y-2">
          <div className="w-full h-full bg-yellow-200 p-2">
          <div className="w-full h-[125px] bg-green-200 border-2 border-black">

               <img src="\Images\technical-studies-1.jpg" alt="" className='w-full h-full ' />
          </div>
          <div className="w-full h-14 bg-green-100 mt-2">
               <h1 className='text-bas font-serif font-bold underline'>Learn javascript with Educart build your cariyer </h1>
             </div>
          </div>
        </div>
        <div className="w-1/4 h-[375px] bg-gray-400 p-2 hover:shadow-2xl hover:cursor-pointer hover:translate-x-1 hover:translate-y-2">
          <div className="w-full h-full bg-yellow-200 p-2">
          <div className="w-full h-[125px] bg-green-200 border-2 border-black">
          <img src="\Images\technical-studies-1.jpg" alt="" className='w-full h-full ' />
          </div>
          <div className="w-full h-14 bg-green-100 mt-2">
               <h1 className='text-bas font-serif font-bold underline'>Learn javascript with Educart build your cariyer </h1>
             </div>
          </div>
        </div>
        <div className="w-1/4 h-[375px] bg-gray-400 p-2 hover:shadow-2xl hover:cursor-pointer hover:translate-x-1 hover:translate-y-2">
          <div className="w-full h-full bg-yellow-200 p-2">
          <div className="w-full h-[125px] bg-green-200 border-2 border-black">
          <img src="\Images\technical-studies-1.jpg" alt="" className='w-full h-full ' />
          </div>
          <div className="w-full h-14 bg-green-100 mt-2">
               <h1 className='text-bas font-serif font-bold underline'>Learn javascript with Educart build your cariyer </h1>
             </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDisplay