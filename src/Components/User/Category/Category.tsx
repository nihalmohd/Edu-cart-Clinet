import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { axiosIntance } from '../../../Api/config'
import { GiRoundStar } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import CourseDisplay from '../Home/CourseDisplay'





interface Category{
    _id:string
    Category:string
    Subcategory:[]
    Status:boolean
  }
  

const Category = () => {
    const navigate = useNavigate()
    const [categories,setcategories] = useState<Category[]>()
useEffect(()=>{
  DisplayCategory()
},[])

const data =useSelector((state:any)=>state.user)
console.log(data,"redux data ann ");


const DisplayCategory = async() =>{
  const {data} = await axiosIntance.get("/ShowCategory")
  if(data){
    console.log(data);
    const {FoundedCategroy} = data
    setcategories(FoundedCategroy)
  }
}
  return (
    <div>
    <div className='pl-2 pr-2 mb-10 mt-2'>
    <div className="w-full h-full  p-2  hover:scale-x-100  overflow-hidden">
      {/* <div className="w-full h-10 bg-white flex justify-center items-center border-2 border-slate-500">
        <h1 className='font-serif text-2xl font-bold underline'>Categories</h1>
      </div> */}
      <div className="w-full h-full mt-2 sm:grid sm:grid-cols-2 sm:gap-2  md:grid md:grid-cols-5 gap-3">
      {
        categories?.map((items)=>(
          items.Status?
        <div key={items._id} className="sm:w-1/2 md:h-20 md:w-full relative overflow-hidden bg-transparent group hover:bg-black  hover:-translate-y-1 hover:translate-x-1 hover:cursor-pointer border border-black  rounded-xl" onClick={()=>{navigate(`/SubCategory/${items.Category}`)}}>
          <p className="absolute inset-0 flex items-center justify-center  text-white text-lg font-semibold underline">
            {items.Category} 
          </p>
          <div className="absolute inset-0 transition-transform duration-500 transform translate-x-0 bg-white hover:translate-x-full">
            <p className="absolute inset-0 flex items-center justify-center text-black text-lg font-semibold underline">
            {items.Category} 
            </p>
          </div>
        </div>
        :<></>
      ))
      }
      </div>
    </div>
  </div>
<CourseDisplay/>
    </div>
  
  )
}

export default Category