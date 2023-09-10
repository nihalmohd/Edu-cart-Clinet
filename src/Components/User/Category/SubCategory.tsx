import React, { useEffect, useState } from 'react'
import { GiRoundStar } from 'react-icons/gi'
import { useNavigate, useParams } from 'react-router-dom'
import { axiosIntance } from '../../../Api/config'


interface Category{
  _id:string
  Category:string
  Subcategory:[]
  Status:boolean
}

interface Course {
  _id:string
  courseTitle: string;
  courseDescription: string;
  courseLearning: string
  courseIncludes: string
  coursePrice: number;
  ThumbnailLocation: string;
  SelectedCategory: string;
  SelectedSubCategory: string;
  DemoVideoLocation: string;
  Class?: [{ classVideoLocation: string, classname: string, ClassDescription: string }];
  Mentorname:string;
  Status?: boolean;
  // User ?: [string];
  // stud ?: [{id:string,date:Date,month:string,fees:number}]
  // paymentStatus ?: boolean;
}



const SubCategory = () => {
  useEffect(() => {
    FetchSubcategory()
    fetchCourseByCategory()  
  }, [])
  
  const [FoundedCategory,setFoundedCategory] = useState<Category>()
  const [CategorybyCourse,SetCoursebyCategory] = useState<Course[]>()
  console.log(CategorybyCourse);
  
    const navigate =useNavigate()
    const {SelectedCategory} = useParams()
    console.log(SelectedCategory," this is course name on subcategory");
    
    const FetchSubcategory = async() =>{
       const {data} = await axiosIntance.get("/takeSubcategory",{params:{SelectedCategory}})
       if(data){
        const {FoundedSubCategroy} = data
        setFoundedCategory(FoundedSubCategroy)
       }
    }

    const fetchCourseByCategory = async() =>{
      const {data} = await axiosIntance.get("/TakeCouresByCategory",{params:{Category:SelectedCategory}})
      if(data){
        const {FoundedCourseByCategory} = data
        console.log(data);
        SetCoursebyCategory(FoundedCourseByCategory)
      }
    }
  return (
    <div>
            <div className='pl-2 pr-2 mb-10 mt-2'>
    <div className="w-full h-full  p-2  hover:scale-x-100  overflow-hidden">
      <div className="w-full h-10 bg-white flex justify-center items-center border-2 border-black">
        <h1 className='font-serif text-2xl font-bold underline'>{FoundedCategory?.Category}</h1>
      </div>
      <div className="w-full h-full mt-2 sm:grid sm:grid-cols-2 sm:gap-2  md:grid md:grid-cols-5 gap-3">
      {
       FoundedCategory?.Subcategory.map((items)=>(

         <div key={items} className="sm:w-1/2 md:h-20 md:w-full relative overflow-hidden bg-transparent group hover:bg-black  hover:-translate-y-1 hover:translate-x-1 hover:cursor-pointer border border-black  rounded-xl" >
           <p className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold border border-black underline">
             {items}
           </p>
           <div className="absolute inset-0 transition-transform duration-500 transform translate-x-0 bg-white hover:translate-x-full">
             <p className="absolute inset-0 flex items-center justify-center text-black text-lg font-semibold  underline">
             {items} 
             </p>
           </div>
         </div>
        
       ))
      }
      </div>
    </div>
  </div>
  <div className='p-2'>
      <div className="w-full h-full bg-slate-200 rounded-lg p-2 ">
        <div className="w-full h-16  flex items-center justify-center border-2 border-black bg-white p-2 ">
          <h1 className='text-2xl font-serif font-bold underline'><span className='text-blue-600 hover:cursor-pointer underline' >{FoundedCategory?.Category}</span> based Courses </h1>
        </div>
        <div className="w-full h-full p-1 grid grid-cols-5 gap-2 mt-1">
          {
            
            CategorybyCourse?.map((items)=>(
                CategorybyCourse.length>0?
                <div className="w-full h-[375px] bg-gray-400 p-2 hover:shadow-2xl hover:cursor-pointer hover:translate-x-1 hover:translate-y-2 " >
                  <div className="w-full h-full bg-slate-50 p-2">
                    <div className="w-full h-[125px] bg-green-200 border-2 border-black">
                      <img src={items.ThumbnailLocation} alt="" className='w-full h-full 'onClick={()=>navigate(`/showCourse/${items._id}`)} />
                    </div>
                    <div className="w-full h-14  mt-2 flex">
                      <h1 className='text-bas font-serif font-bold underline'>{items.courseTitle} </h1>
                    </div>
                    <div className="w-full h-8 mb-1 flex">
                      <div className='w-1/2 h-full  flex items-center'>
                      <GiRoundStar/>
                      <GiRoundStar/>
                      <GiRoundStar/>
                      <GiRoundStar/>
                      <GiRoundStar/>
                      </div>
                      <div className='w-1/2 h-8 flex items-center justify-center'>
                        <h1 className='text-xs font-semibold text-stone-500 text-start'>4.3</h1>
                      </div>
                    </div>
                    <div className="w-full h-5 flex items-center justify-start">
                      <h1 className='text-center font-semibold text-stone-500 text-xs'>Mr/Mrs:{items.Mentorname}</h1>
                    </div>
                    <div className="w-full h-10 flex justify-start items-center">
                      <h1 className='font-semibold text-lg text-black'>₹{items.coursePrice}</h1>
                    </div>
                    <div className='w-full h-16 p-1 flex gap-2'>
                      <button className='bg-black text-white w-full h-12 font-semibold text-lg hover:border-2 hover:border-black hover:bg-transparent hover:text-black 'onClick={()=>navigate(`/showCourse/${'Nihal'}`)}>Buy now</button>
                      {/* <button className='bg-white border-2 border-black text-black w-1/3 h-12 font-semibold flex justify-center items-center text-xl hover:bg-black hover:text-white'><FaRegHeart/></button> */}
                    </div>
                  </div>
              </div> :<div className='w-full h-20 bg-green-100'>
                <div className="w-full bg-yellow-100">halloooo</div>
              </div>  
            ))
          }
            
           
        </div>
      </div>
    </div>
    </div>
  )
}

export default SubCategory