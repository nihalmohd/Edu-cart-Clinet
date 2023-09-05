import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {BiEdit,BiBlock } from "react-icons/bi"
import {CgUnblock} from "react-icons/Cg"

import { axiosIntance } from '../../Api/config'


interface Banner{
    Image:string
    Content:string
    _id:string
    Status:boolean
}

const AdminDisplayBanner: React.FC= ()=> {
    const [Banners,setBanners]=useState <Banner[]> ([])

useEffect(() => {
    HandleBanners()
},[])

const HandleBanners=async()=>{
    const {data}=await axiosIntance.post("/Admin/AdminShowBanner")
      const {Banner} =data
      console.log(Banner);
    setBanners(Banner)
}
const HandleBlockBanner=async (_id:string)=>{
   const {data} = await axiosIntance.post("/Admin/AdminHideBanner",{_id})
   console.log(data);
      HandleBanners()
}
const HandleVisibleBanner=async (_id:string)=>{
    const {data} = await axiosIntance.post("/Admin/AdminVisibleBanner",{_id})
    console.log(data);
       HandleBanners()
 }
    return (
        Banners.map((item)=>
        <div className="flex items-center border-2 border-black rounded-lg  p-4 mb-2">
        <div className="flex-shrink-0 mr-4 border-2 border-black ">
          <img src={item.Image} alt="Admin Image" className="w-28 h-15 " />
        </div>
        <div className="flex-grow text-black">
          <h2 className="text-xl font-bold ">Welcome, Admin!</h2>
          <p>{item.Content}</p>
        </div>
        <div className="flex-shrink-0 flex gap-2">
            <div className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border  hover:bg-black hover:text-white ">
          <BiEdit/>
            </div>
            {
                item.Status?
            <div onClick={()=>HandleBlockBanner(item._id)} className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border hover:bg-black hover:text-white ">
          <BiBlock/>
            </div>:
            <div  onClick={()=>HandleVisibleBanner(item._id)} className="w-10 h-10 flex justify-center items-center  border-black text-black rounded border hover:bg-black hover:text-white ">
          <CgUnblock/>
            </div>
            }
          
        </div>
      </div>
        )
    )
}

export default AdminDisplayBanner
