import { File } from 'aws-sdk/clients/codecommit'
import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { IoIosCloudOutline, IoMdCloudOutline } from "react-icons/io"
import { axiosIntance } from '../../Api/config'
import { String } from 'aws-sdk/clients/cloudsearch'
import AWS from 'aws-sdk'
import { s3cofing } from '../../s3config'


interface Category {
    Category: string
    Subcategory: [string]
    _id: string
    Status: boolean
}
const MentorCourseUpload = () => {
    useEffect(() => {
        handleCategory()
    },[])
    
    const [ThumbnailLocation,SetThumbnailLocation] = useState<string>("")
    const [DemoVideoLocation,SetDemoVideoLocation] = useState<string>("")
    const [ClassVideoLocation,SetClassVideoLocation] = useState<string>("")
    
    const [Thumbnail, setThumbnail] = useState<File | null>(null)
    const [DemoVideo, setDemoVideo] = useState<File | null>(null)
    const [classVideo, SetClassVideo] = useState<File | null>(null)
    
    
    const [SelectedCategory, setSelectedCategory] = useState<string>('')
    const [SelectedSubCategory, setSelectedSubCategory] = useState<string>('')
    const [dropCategory, setdropCategory] = useState<Category[]>([])
    const [dropSubCategory, setdropSubCategory] = useState<Category>()
    
    
    const [courseTitle, setCourseTitle] = useState<string>("")
    const [courseDescription, setCourseDescription] = useState<string>("")
    const [courseLearning, setCouresLearning] = useState<string>("")
    const [courseIncludes, setIncludes] = useState<string>("")
    const [coursePrice, setCoursePrice] = useState<string>("")
    const [className, setClassname] = useState<string>("")
    const [ClassDescription, setClassDescription] = useState<string>("")
    // console.log(ThumbnailLocation, DemoVideoLocation, courseTitle, courseDescription, courseLearning, courseIncludes, coursePrice, className, ClassDescription,CoursewithClass, "all of them getting") 
 const handleCategory = async () => {
     const { data } = await axiosIntance.get("/Mentor/MentorDisplayCategories")
     const { FoundedCategroy } = data
     setdropCategory(FoundedCategroy)
        // setCate(FoundedCategroy[0])   ;
    }
    const handleSubcategory = async () => {
        const { data } = await axiosIntance.get("/Mentor/MentorTakeSubcayegory", { params: { SelectedCategory } })
        const { FoundedSubCategroy } = data
        setdropSubCategory(FoundedSubCategroy)
    }
    const ImageRef = useRef<HTMLInputElement>(null)
    const videoRef = useRef<HTMLInputElement>(null)
    const Classvideoref = useRef<HTMLInputElement>(null)

    const handleCateotrychange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setSelectedCategory(e.target.value)
    }
    const handleChangeSubcategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault()
        setSelectedSubCategory(e.target.value)
    }
    const handleCorseTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCourseTitle(e.target.value)
    }

    const handleCourseDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCourseDescription(e.target.value)
    }
    const handleCourseLearning = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCouresLearning(e.target.value)
    }
    const handleCourseIncludes = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setIncludes(e.target.value)
    }
    const handleCoursePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCoursePrice(e.target.value)
    }
    const handleCourseThumbnail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files && e.target.files[0] as File || null;
        console.log(file)
        setThumbnail(file)
    };
    const handleCourseDemoVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
        const Videofile: File | null = e.target.files && e.target.files[0] as File || null;
        console.log(Videofile)
        setDemoVideo(Videofile)
    };
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
    
    
    const HandleImageClick = () => {
        if (ImageRef.current) {
            ImageRef.current.click()
        }
    }

    const HandleVideoClick = () => {
        if (videoRef.current) {
            videoRef.current.click()
        }
    }
    
    const HandleClassVideoClick = () => {
        if (Classvideoref.current) {
            Classvideoref.current.click()
        }
    }


    const handleUploadFiles = async ( file: any) => {

        if (!file) {
            console.log('Please select both video and thumbnail files.');
            return;
        }
        const s3 = new AWS.S3({
            accessKeyId:s3cofing.accesskeyId,
            secretAccessKey: s3cofing.secretAccessKey,
            region: s3cofing.region
        }); 
        const params = {
        Bucket:s3cofing.bucketName,
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

    const handleUpload = async(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (Thumbnail) {
        const ThumbnailLocation = await handleUploadFiles(Thumbnail);  
        console.log(ThumbnailLocation,"Thumbnail Image Location");
        SetThumbnailLocation(ThumbnailLocation as string)
        }
        if(DemoVideo){
         const DemoVideoLocation =await handleUploadFiles(DemoVideo);
         console.log(DemoVideoLocation,"demo Video Location");
         SetDemoVideoLocation(DemoVideoLocation as string)
        }
        if(classVideo){
            const classVideoLocation =await handleUploadFiles(classVideo)
            console.log(classVideoLocation,"class video Location");
            SetClassVideoLocation(classVideoLocation as string)
        }
        const {data} = await axiosIntance.post("/Mentor/MentorAddCoruseAndClass",{courseTitle,courseDescription,courseLearning,courseIncludes,SelectedCategory,SelectedSubCategory,coursePrice,}) 
        if(data){
        console.log(data);
        }
    };    

    return (
        <div>
            <form action="">
                <div className="w-full h-full md:flex  ">
                    <div className="md:w-1/2 h-[700px] p-2 sm:w-full ">
                        <div className="w-full h-[680px] border-dotted border-2 border-black p-2">
                            <div className="w-full h-10 flex justify-center items-center border-2 border-black ">
                                <h1 className='text-center text-3xl font-bold text-black font-serif'>Course upload</h1>
                            </div>

                            <div className="w-full h-[620px] mt-1 p-1">
                                <div className="w-full h-full  p-1">
                                    <div className="w-full h-20  ">
                                        <div className="w-[150px] h-8 flex justify-start items-center  ">
                                            <h1 className='font-bold' >Title <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full h-1/2 ">
                                            <input onChange={handleCorseTitle} className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter a Course Name' name='Title' />
                                        </div>
                                    </div>
                                    <div className="w-full h-20 ">
                                        <div className="w-[200px] h-8 flex justify-start items-center  ">
                                            <h1 className='font-bold' > Description <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full h-1/2 ">
                                            <input onChange={handleCourseDescription} className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter a Description' name='Description' />
                                        </div>
                                    </div>
                                    <div className="w-full h-20 ">
                                        <div className="w-[300px] h-8 flex justify-start items-center  ">
                                            <h1 className='font-bold' >What you learn with this course <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full h-1/2 ">
                                            <input onChange={handleCourseLearning} className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder=' eg:-Build multiple demo projects & explore realistic examples ' name='Lerning' />
                                        </div>
                                    </div>
                                    <div className="w-full h-20  ">
                                        <div className="w-[250px] h-8  flex justify-start items-center  ">
                                            <h1 className='font-bold' >This course Includes <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full h-1/2 ">
                                            <input onChange={handleCourseIncludes} className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='eg:-Certificate of completion' name='Includes' />
                                        </div>
                                    </div>
                                    <div className="w-full h-20 flex">
                                        <div className="w-full h-20 ">
                                            <div className="w-[100px] h-8 flex justify-start items-center  ">
                                                <h1 className='font-bold' >Price <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="full h-1/2  mr-1">
                                                <input onChange={handleCoursePrice} className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter course price' name='price' />
                                            </div>

                                        </div>
                                        <div className="w-full h-20 ">
                                            <div className="w-[150px] h-8  flex justify-start items-center  ">
                                                <h1 className='font-bold' >Thumbnail Image <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full h-1/2 bg-gray-300 border-2 border-dashed border-black flex justify-center items-center" onClick={HandleImageClick}>
                                                <h1 className='font-serif text-base text-center'>Unpload your thumbnail image</h1>
                                                <input onChange={handleCourseThumbnail} type="file" ref={ImageRef} name='Image' className='hidden' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-20  flex ">
                                        <div className="w-1/2 h-20 ">
                                            <div className="w-[200px] h-8  flex justify-start items-center  ">
                                                <h1 className='font-bold' >Category <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full max-w-md border-2 border-black rounded-lg ">
                                                <div className="relative">
                                                    <select
                                                        onChange={handleCateotrychange}
                                                        onClick={handleCategory}
                                                        id="dropdown"
                                                        name="category"
                                                        className="block appearance-none w-full bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring"
                                                    >
                                                        {

                                                            dropCategory ? dropCategory.map((items) => (
                                                                <option key={items?._id} value={items?.Category}>{items?.Category}</option>
                                                            )) : <option>Category</option>
                                                        }
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg
                                                            className="fill-current h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M14.65 5.65a1 1 0 011.41 1.41l-4 4a1 1 0 01-1.41 0l-4-4a1 1 0 111.41-1.41L10 9.18l4.65-4.65z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/2 h-20 ">
                                            <div className="w-[200px] h-8  flex justify-start items-center  ">
                                                <h1 className='font-bold' >Sub Category <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full max-w-md border-2 border-black rounded-lg bg-transparent">
                                                <div className="relative">
                                                    <select
                                                        onClick={handleSubcategory}
                                                        onChange={handleChangeSubcategory}
                                                        id="dropdown"
                                                        name="subCategory"
                                                        className="block appearance-none w-full bg-transparent border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring"
                                                    >
                                                        {
                                                            dropSubCategory?.Subcategory.map((items) => (
                                                                <option key={items} value={items}>{items}</option>
                                                            ))
                                                        }

                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                        <svg
                                                            className="fill-current h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M14.65 5.65a1 1 0 011.41 1.41l-4 4a1 1 0 01-1.41 0l-4-4a1 1 0 111.41-1.41L10 9.18l4.65-4.65z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full h-28 ">
                                        <div className="w-[150px] h-8  justify-start items-center  ">
                                            <h1 className='font-bold' >Demo Video <span className="text-red-700 flex-row">*</span></h1>
                                        </div>
                                        <div className="w-full h-20  border-2 bg-gray-200 border-dashed border-slate-800 flex justify-center items-center " onClick={HandleVideoClick}>
                                            <div className="w-[full]-h-[full]  flex gap-2">
                                                <h1 className='text-gray-500 text-xl  font-serif'>Upload your Demo Video Here </h1>
                                            </div>
                                            <div className=" w-10 h-5 ">
                                                <img src="" alt="UploadImage" />
                                            </div>
                                            <input onChange={handleCourseDemoVideo} className='hidden' ref={videoRef} type="file" name='DemoVideo'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="md:w-1/2 h-[700px] p-2">
                        <div className="w-full h-[400px]  border-2 border-dotted border-black p-2">
                            <div className="w-full h-10  border-2 border-black flex justify-center items-center">
                                <h1 className='text-center text-3xl font-bold text-black font-serif'>Class upload</h1>
                            </div>
                            <div className="w-full h-[400px] p-1">
                                <div className="w-full h-[390px]  flex ">
                                    <div className="w-full h-20">
                                        <div className="w-full h-20 ">
                                            <div className="w-1/4 h-8 flex justify-start items-center">
                                                <h1 className='font-bold' >Class Name <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full h-1/2  ">
                                                <input onChange={handleChangeClassname} className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Enter Class Name' name='Classname' />
                                            </div>
                                        </div>
                                        <div className="w-full h-20 ">
                                            <div className="w-1/4 h-8 flex justify-start items-center">
                                                <h1 className='font-bold' >Discription <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full h-1/2 ">
                                                <input onChange={handleChangeClassDescription} className='w-full h-full border-2 border-black rounded-xl bg-transparent p-1 text-lg' placeholder='Class Description' name='Classdescription' />
                                            </div>
                                        </div>
                                        <div className="w-full h-[120px] p-1">
                                            <div className="w-1/4 h-8 flex justify-start items-center">
                                                <h1 className='font-bold' >Class Video <span className="text-red-700 flex-row">*</span></h1>
                                            </div>
                                            <div className="w-full h-20  border-dashed border-2 border-black flex justify-center items-center" onClick={HandleClassVideoClick} >
                                                <div className="w-[full]-h-[full]  flex gap-2">
                                                    <h1 className='text-gray-500 text-xl  font-serif'>Upload your Class Video Here </h1>
                                                </div>
                                                <input onChange={handleChangeClassVideo} className='hidden' ref={Classvideoref} type="file" name='ClassVideo'/>
                                            </div>

                                        </div>
                                        <div className="w-full h-16  flex items-center">
                                            <div className="w-full h-1/2 flex justify-center items-center">
                                                <button className='w-3/6 h-10 bg-black text-white font-bold hover:border-2 hover:bg-white hover:text-black hover:border-black' onClick={handleUpload}>Upload </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MentorCourseUpload