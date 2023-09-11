import React, { useEffect, useRef, useState } from 'react'
import { BiEdit } from 'react-icons/bi'
import { GiRoundStar } from 'react-icons/gi'
import { IoMdAdd } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { FcAbout } from "react-icons/fc"
import { useSelector } from 'react-redux'
import { axiosIntance } from '../../Api/config'
import AWS from 'aws-sdk'
import { s3cofing } from '../../s3config'
import Loading from '../../Loader/ButtonLoading/ButtonLoading'


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


const MentorShowCourse = () => {
    const navigate = useNavigate()
    const ClassVideoRef = useRef<HTMLInputElement>(null)
    const [CourseByName, setCourseByName] = useState<Course[]>()
    const [isClassModalOpen, setisClassModalOpen] = useState(false)
    const [classname , setClassname] = useState<string>("")
    const [ClassDescription, setClassDescription] = useState<string>("")
    const [classVideo, SetClassVideo] = useState<File | null>(null)
    const [isLoading,setIsloading] = useState<boolean>(false)
    const [_id,set_id] = useState<String>('')

    const { Username } = useSelector((state: any) => state.Mentor)
    const Mentorname = Username
    useEffect(() => {
        TakeCourse()
    }, [])


    const TakeCourse = async () => {
        const { data } = await axiosIntance.get("/Mentor/MentorTakeCourseByName", { params: { Mentorname } })
        const { FoundedCourseByName } = data
        setCourseByName(FoundedCourseByName)
        console.log(data, "this is Course by mentor name");

    }
    const Addclasses = (_id:string) => {
        setisClassModalOpen(true)
        set_id(_id)
    }

    const HandleVidoeclick = () => {
        if (ClassVideoRef.current) {
            ClassVideoRef.current.click()
        }
    }

    const handleChangeClassname = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setClassname(e.target.value)
    }
    const handleChangeClassDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setClassDescription(e.target.value)
    }
    const handleChangeClassVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const classesVideo: File | null = e.target.files && e.target.files[0] as File || null
        console.log(classesVideo)
        SetClassVideo(classesVideo)
    }
    const handleCancel = () =>{
        setisClassModalOpen(false)
        SetClassVideo(null)
    }

    const handleUploadFiles = async (file: any) => {

        if (!file) {
            console.log('Please select both video and thumbnail files.');
            return;
        }
        const s3 = new AWS.S3({
            accessKeyId: s3cofing.accesskeyId,
            secretAccessKey: s3cofing.secretAccessKey,
            region: s3cofing.region
        });
        const params = {
            Bucket: s3cofing.bucketName,
            Key: `Educart/${file.name}`,
            Body: file,
            ContentType: file.type,
        };
        try {
            const response = await s3.upload(params).promise();
            console.log('File uploaded:', response.Location);
            return response.Location
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    }
//    const  handleCourseid =(_id:string)=>{
//     console.log("Nhallsdlfjasdkjflkasjdflkjskdajfsakajsdlfkjasdkfjlsajflksajdfjasdkfjadsj");
//     set_id(_id)
//     handleUpload
//     }

    const handleUpload = async (e:React.MouseEvent<HTMLButtonElement>) => {
        setIsloading(true)
        e.preventDefault()
        console.log(_id,"Course id");
        
        let classVideoLocation
        if (classVideo) {
            console.log("3333");
             classVideoLocation = await handleUploadFiles(classVideo)
            console.log(classVideoLocation, "class video Location");
            // SetClassVideoLocation(classVideoUploadLocation as string)
        }
        console.log( classVideoLocation);

        if (!classVideoLocation){
            return
            console.log("not found")  
        }
        const Classdatas = {
                classname:classname,
                ClassDescription:ClassDescription,
                classVideoLocation:classVideoLocation
            }
            console.log( Classdatas,'shoying')
            const {data} = await axiosIntance.post("/Mentor/MentorAddClasses",{_id,Classdatas}) 
            if(data){
            console.log(data);
             setIsloading(false)
             setisClassModalOpen(false)

            }
            
             
    };

    return (
        <div>
            <div className="w-full h-20  flex justify-end items-center pr-1">
                <div className="w-36 h-10 bg-transparent text-black border-2 border-black text-center flex justify-center items-center font-bold  hover:bg-black hover:text-white mr-3" onClick={() => { navigate("/Mentor/MentorCourseUpload") }} ><h1>Add Course</h1></div>
            </div>

            <div className="w-full h-full  p-1">
                <div className="w-full h-full border-2 border-black p-1">
                    <div className="w-full h-10 bg-slate-200 border-2 border-black flex justify-center items-center">
                        <h1 className='text-black font-serif font-bold text-lg'>Coures are displaying on the mentor Mr/Mrs: <span className='text-blue-800 underline hover:cursor-pointer'>{Mentorname}</span></h1>
                    </div>

                    <div className="w-full h-full p-1 grid grid-cols-5 gap-2 ">
                        {
                            CourseByName?.map((items,key) => (
                                <div className="w-full h-full bg-gray-400 p-2 hover:shadow-2xl hover:cursor-pointer " key={key}>
                                    {
                                        isClassModalOpen &&
                                        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
                                            <div className="bg-white rounded-lg w-11/12 max-w-md mx-auto p-6 "  >

                                                <div className=" justify-between items-center mb-4">
                                                    <div className="w-full h-10  flex justify-center items-center mb-1 border-2 border-black">
                                                        <h1 className='font-bold text-lg text-center '>Edcuart Add Classes on Course</h1>

                                                    </div>
                                                    <form action="">
                                                        <div className='w-full '>
                                                            <div className="w-full h-8 flex items-center">
                                                                <h1 className='font-semibold text-black ml-1'>Class Title<span className='font-semibold text-red-700 ml-1'>*</span></h1>
                                                            </div>
                                                            <input type="text"
                                                                onChange={handleChangeClassname}
                                                                name='Classname'
                                                                placeholder='Please enter your Classname'
                                                                className='w-full h-10 border-black border-2 rounded-lg bg-transparent'

                                                            />
                                                        </div>
                                                        <div className='w-full '>
                                                            <div className="w-full h-8 flex items-center">
                                                                <h1 className='font-semibold text-black ml-1'>Class Description<span className='font-semibold text-red-700 ml-1'>*</span></h1>
                                                            </div>
                                                            <input type="text"
                                                                onChange={handleChangeClassDescription}
                                                                name='Class description'
                                                                placeholder='Please enter your description '
                                                                className='w-full h-10 border-black border-2 rounded-lg bg-transparent'

                                                            />
                                                        </div>
                                                        <div className='w-full '>
                                                            <div className="w-full h-8 flex items-center">
                                                                <h1 className='font-semibold text-black ml-1'>Class Video<span className='font-semibold text-red-700 ml-1'>*</span></h1>
                                                            </div>
                                                            <div className='w-full h-10 border-black border-2 border-dashed rounded-lg bg-transparent flex justify-center items-center font-bold text-lg' onClick={() => { HandleVidoeclick() }}>{!classVideo?<h1>Upload Profile Image</h1>:classVideo.name}</div>
                                                            <input type="file"
                                                                ref={ClassVideoRef}
                                                                onChange={handleChangeClassVideo}
                                                                name='Profile'
                                                                placeholder='Please Enter a Subcategory Name'
                                                                className='w-full h-10 border-black border-2 rounded-lg bg-transparent hidden'
                                                            />

                                                        </div>
                                                        {/* <div className="w-full h-32 bg-yellow-100"></div> */}
                                                        {
                                                            isLoading? <div className='w-full.h-10 bg-yellow-100 flex justify-center items-center'><Loading/></div>:
                                                        <div className="w-full h-10  mt-2 flex gap-1 ">   
                                                            <div className="w-1/2 h-10 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white flex justify-center items-center font-bold text-lg hover:cursor-pointer" onClick={() => handleCancel()}>Cancel</div>
                                                            <button className="w-1/2 h-10 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white flex justify-center items-center font-bold text-lg hover:cursor-pointer" onClick={handleUpload} >Update</button>

                                                        </div>
                                                        }
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    <div className="w-full h-full bg-slate-50 p-2">
                                        <div className="w-full h-[125px] bg-green-200">
                                            <img src={items.ThumbnailLocation} alt="Thumbnail Image" className='w-full h-full ' />
                                        </div>
                                        <div className="w-full h-14  mt-2 flex">
                                            <h1 className='text-bas font-serif font-bold underline'>{items.courseTitle}</h1>
                                        </div>
                                        <div className="w-full h-8 mb-1 flex">
                                            <div className='w-1/2 h-full  flex items-center'>
                                                <GiRoundStar />
                                                <GiRoundStar />
                                                <GiRoundStar />
                                                <GiRoundStar />
                                                <GiRoundStar />
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
                                            <button className='bg-transparent border-2 border-black text-black w-full h-12 font-semibold text-2xl  hover:bg-black hover:text-white mt-2 flex justify-center items-center' onClick={()=>Addclasses(items._id)}><IoMdAdd /></button>
                                            <button className='bg-transparent border-2 border-black text-black w-full h-12 font-semibold text-2xl  hover:bg-black hover:text-white mt-2 flex justify-center items-center'><BiEdit /></button>
                                            <button className='bg-transparent border-2 border-black text-black w-full h-12 font-semibold text-2xl  hover:bg-black hover:text-white mt-2 flex justify-center items-center' onClick={()=>{navigate(`/Mentor/MentorCourseDetaild/${items._id}`)}} ><FcAbout /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorShowCourse
