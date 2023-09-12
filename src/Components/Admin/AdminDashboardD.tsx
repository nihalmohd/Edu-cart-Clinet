import AdminNav from "./AdminNav"
// import React from 'react'
import { axiosIntance } from "../../Api/config";
import { useEffect, useState } from "react";


// interface Course {
//     _id:string
//     courseTitle: string;
//     courseDescription: string;
//     courseLearning: string
//     courseIncludes: string
//     coursePrice: number;
//     ThumbnailLocation: string;
//     SelectedCategory: string;
//     SelectedSubCategory: string;
//     DemoVideoLocation: string;
//     Class?: [{ classVideoLocation: string, classname: string, ClassDescription: string }];
//     Mentorname : string;
//     Status?: boolean;
//     // User ?: [string];
//     // stud ?: [{id:string,date:Date,month:string,fees:number}]
//     // paymentStatus ?: boolean;
//   }
//   interface User {
//     Email: string;
//     Username: string;
//     Status: boolean;
//     _id:string
//   }

  
  const AdminDashboardD = () => {
    useEffect(() => {
        DisplayCourse()
        handleUsers()
        handleMentors()
    }, [])
    
    const [Admincourse, setAdminCourse] = useState<number>()
    const [getUser,SetGotUser]=useState<number>()
    const [GetMentor,SetGotMentor]=useState<number>()
    const DisplayCourse = async () => {
        const { data } = await axiosIntance.get("/Admin/AdminDisplayCourse")
        console.log(data);
        if (data) {
          const { Getcourse } = data
          setAdminCourse(Getcourse.length as number)
        }
      }
      const handleUsers=async ()=>{
        const {data}= await axiosIntance.post("/Admin/getUsers")
        SetGotUser(data.DisplayGetUser.length)
        console.log(data.DisplayGetUser);
    }
    const handleMentors=async ()=>{
        const {data}= await axiosIntance.post("/Admin/getMentors")
        SetGotMentor(data.DisplayGetUser.length)
        console.log(data.DisplayGetUser);
    }
      
  return (
    
      <div>
          <div className="w-full  h-ful p-2 mt-3">
              <div className="w-full  h-40 p-1 grid grid-cols-4 gap-2 ">
                  <div className="w-full h-full bg-gray-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-2xl border border-black ">
                      <div className="w-full h-1/2  flex justify-center items-center">
                          <h1 className='font-serif text-2xl font-bold underline ' >Edcuart Courses</h1>
                          
                      </div>
                      <div className="w-full h-1/2  flex justify-center items-start">
                          <h1 className='font-serif text-2xl font-bold underline ' >{Admincourse}</h1>
                          
                      </div>
                  </div>

                  <div className="w-full h-full bg-gray-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-2xl border border-black ">
                      <div className="w-full h-1/2  flex justify-center items-center">
                          <h1 className='font-serif text-2xl font-bold underline ' >Edcuart Users</h1>
                          
                      </div>
                      <div className="w-full h-1/2  flex justify-center items-start">
                          <h1 className='font-serif text-2xl font-bold underline ' >{getUser}</h1>
                          
                      </div>
                  </div>
                  <div className="w-full h-full bg-gray-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-2xl border border-black ">
                      <div className="w-full h-1/2  flex justify-center items-center">
                          <h1 className='font-serif text-2xl font-bold underline ' >Edcuart Mentors</h1>
                          
                      </div>
                      <div className="w-full h-1/2  flex justify-center items-start">
                          <h1 className='font-serif text-2xl font-bold underline ' >{GetMentor}</h1>
                          
                      </div>
                  </div>
                  <div className="w-full h-full bg-gray-200 hover:translate-x-1 hover:translate-y-1 hover:shadow-2xl border border-black ">
                      <div className="w-full h-1/2  flex justify-center items-center">
                          <h1 className='font-serif text-2xl font-bold underline ' >Edcuart Profit</h1>
                          
                      </div>
                      <div className="w-full h-1/2  flex justify-center items-start">
                          <h1 className='font-serif text-2xl font-bold underline ' >{109999}</h1>
                          
                      </div>
                  </div>
                  
                  
  
  
              </div>
          </div>
      </div>
  )
}

export default AdminDashboardD