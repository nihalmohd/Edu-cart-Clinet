import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { axiosIntance } from '../../Api/config'
import { GiRoundStar } from 'react-icons/gi';

interface Course {
    _id: string;
    courseTitle: string;
    courseDescription: string;
    courseLearning: string;
    courseIncludes: string;
    coursePrice: number;
    ThumbnailLocation: string;
    SelectedCategory: string;
    SelectedSubCategory: string;
    DemoVideoLocation: string;
    Class?: [{ classVideoLocation: string; classname: string; ClassDescription: string }];
    Mentorname: string;
    Status?: boolean;
}
interface SelectedClass {
    classVideoLocation: string;
    classname: string;
    ClassDescription: string
  }



const MentorCourseDetail = () => {
    const [selectedClass, SetSelectedClass] = useState<SelectedClass>()
    const [CourseByid, setCourseByid] = useState<Course>()
    useEffect(() => {
        // takeCourseId(courseDetails?._id as string)
        SetSelectedClass(CourseByid?.Class?.[0] as SelectedClass)
      }, [CourseByid])
    useEffect(() => {
        TakeCourse()
    }, [])
    const _id = useParams()

    const TakeCourse = async () => {
        const { data } = await axiosIntance.get("/Mentor/takeCoursebyid", { params: { _id } })
        const { FoundedCourseByid
        } = data
        setCourseByid(FoundedCourseByid
            )
        console.log(data, "this is Course by mentor name");
    }
    console.log(CourseByid);
    
    return (
        <div>
            <div className="w-full h-sceen bg-green-100 mt-1">
                <div className="w-full h-full mb-2" key={CourseByid?._id}>
                    <div className="w-full h-full bg-[#2d2f31] p-1 flex gap-1 ">
                        <div className="w-3/5 h-full  pl-1 pr-1">
                            <div className="w-2/3 h-8  flex justify-start items-center ">
                                <h1 className='ml-7 p-1 text-white font-bold text-sm font-serif'>{CourseByid?.SelectedCategory}</h1>
                                <h1 className="p-2 text-lg font-bold text-slate-400">&#62;</h1>
                                <h1 className='text-white font-bold text-sm font-serif'>{CourseByid?.SelectedSubCategory}</h1>
                            </div>
                            <div className="w-full h-20  pl-4">
                                <h1 className='text-white text-3xl font-bold font-serif underline'>{CourseByid?.courseTitle}</h1>
                            </div>
                            <div className="w-full h-16  pl-4">
                                <h1 className='font-semibold text-lg text-white'>{CourseByid?.courseDescription}</h1>
                            </div>
                            <div className="w-1/3 h-10 ml-4 ">
                            <h1 className='  text-start font-bold text-2xl text-white underline'> ₹{CourseByid?.coursePrice}</h1>
                            </div>
                            <div className="w-1/2 h-10  pl-4 flex  items-center">
                                <h1 className='text-lg text-white font-semibold'><GiRoundStar /></h1>
                                <h1 className='text-lg text-white font-semibold'><GiRoundStar /></h1>
                                <h1 className='text-lg text-white font-semibold'><GiRoundStar /></h1>
                                <h1 className='text-lg text-white font-semibold'><GiRoundStar /></h1>
                                <h1 className='text-lg text-white font-semibold'><GiRoundStar /></h1>
                                <h1> </h1>
                                <h1 className='text-lg text-white font-semibold ml-5'>4.2</h1>
                            </div>
                            
                            <div className="w-1/3 h-10 -100 pl-4 ">
                                <h1 className='text-start font-semibold text-white'>Created By:{CourseByid?.Mentorname}</h1>
                            </div>
                       
                        </div>
                        <div className="w-2/5 h-full p-3 flex justify-center items-center">
                            <div className="w-full h-full bg-white border-2 border-black">
                                <video
                                    controls
                                    onContextMenu={(e) => e.preventDefault()}
                                    src={`${CourseByid?.DemoVideoLocation}`}
                                    className="w-full h-full object-cover"
                                    controlsList="nodownload"
                                    autoPlay

                                ></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-full">
            <div className='w-full h-full p-1  '>
            <div className="w-full h-20 bg-transparent  text-black border-2 border-black mt-2 ">
              <h1 className='text-center text-3xl underline'>Educart Classes</h1>
              <h1 className=' text-black text-lg text-center'>Unlock Your Learning Potential with Educart Classes</h1>

            </div>
            <div className="w-full  h-full flex gap-1 p-1  " key={selectedClass?.classname}>
              <div className="w-3/5 h-full border-2 border-black p-2 shadow-2xl ">

                <div className="w-full h-[460px]   border-2 border-black">
                  <video
                    controls
                    onContextMenu={(e) => e.preventDefault()}
                    src={selectedClass?.classVideoLocation}
                    className="w-full h-full object-cover"
                    controlsList="nodownload"
                    
                  ></video>
                </div>
                <div className="w-full h-14 mt-1 flex items-center">
                  <h1 className='font-bold font-serif text-2xl text-black underline  ml-3'> {selectedClass?.classname}</h1>
                </div>
                <div className="w-full h-28  mt-1">
                  <h1 className='font-bold  text-lg text-gray-500  ml-3'> {selectedClass?.ClassDescription}</h1>
                </div>
              </div>
              <div className="w-2/5 h-96 bg-slate-200 border-2 border-black p-1 overflow-auto">
                {
                  CourseByid ? CourseByid?.Class?.map((items, index) => (
                    <div className="w-full h-20 bg-white border border-black mt-1 p-1" onClick={() => { SetSelectedClass(items as SelectedClass) }} >
                      <div className="w-full  h-full flex gap-2">
                        <div className="w-32 h-full ">
                          <video src={items.classVideoLocation} className='w-full h-full object-cover' ></video>

                        </div>
                        <div className="w-full h-full -500">
                          <div className="w-full h-3/5  flex items-center overflow-x-auto scroll-m-0 scroll-mx-0">
                            <h1 className='font-serif font-semibold text-sm underline'>Class no <span >{index + 1}</span>:{items.classname}  </h1>
                          </div>
                          <div className="w-full h-2/5  overflow-hidden">
                            <h1 className=' font-semibold text-sm text-gray-500 '>{items.ClassDescription}</h1>
                          </div>

                        </div>

                      </div>
                    </div>
                  )) : <></>
                }
              </div>
            </div>
          </div>
            </div>
        </div>
    )
}

export default MentorCourseDetail