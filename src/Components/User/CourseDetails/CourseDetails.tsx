import  { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GiRoundStar } from 'react-icons/gi';
import { axiosIntance } from '../../../Api/config';
import { BsTextIndentLeft } from 'react-icons/bs';

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
  MentorId:string
  Status?: boolean;
}

// interface SelectedClass {
//   classVideoLocation: string;
//   classname: string;
//   ClassDescription: string
// }


const CourseDetail = () => {
  const navigate = useNavigate();
  const VideoDurationRef = useRef<HTMLVideoElement | null>(null);
  console.log(VideoDurationRef?.current?.duration, 'duration is checking ');
  // const [classVideo,SetclassVideo] = useState<string>("")
  const [isPayment, setIspaymet] = useState<Boolean>(false)
  const [Duration, setDuration] = useState<number | null>(null);
  const [courseDetails, setCourseDetails] = useState<Course>();
  console.log(courseDetails, "hallow jfsdf");

  const { _id } = useParams();


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosIntance.get('/CourseDeatailsByid', {
          params: { _id },
        });
        const { FoundedCourseByid } = response.data;
        setCourseDetails(FoundedCourseByid);
        takeCourseId()
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    }


    fetchData();
  }, [_id]);



  useEffect(() => {
    const handleLoadedMetadata = () => { 
      if (VideoDurationRef?.current) {
        if (!isNaN(VideoDurationRef?.current?.duration)) { 
          setDuration(VideoDurationRef?.current?.duration);
        }
      }
    };

    if (VideoDurationRef?.current) {
      VideoDurationRef?.current?.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (VideoDurationRef?.current) {
        VideoDurationRef?.current?.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [courseDetails]);

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const Seconds = Math.floor(seconds % 60);

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = Seconds.toString().padStart(2, '0');

    console.log(formattedHours, formattedMinutes, formattedSeconds, "nihallllllll");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };


  const takeCourseId = async () => {
    try {
      const { data } = await axiosIntance.post("/UpdatedCouseIdtake", { CourseId: _id })
      if (data) {
        console.log(data, "Nihalllalalalalalalalalall");
        console.log(data);
        const { FoundedCoursidonUser } = data
        if (FoundedCoursidonUser) {
          setIspaymet(true)
        }
      } else {
        console.log("somte thing went wrong");
      }
    } catch (error) {
      console.log(error);

    }
  }
  console.log(courseDetails?.MentorId,"this is mentor id form data ");

  const createRoom =async(MentorId:string)=>{
    const {data} = await axiosIntance.post("/AddChat",{MentorId})
    console.log(data);
    const {FoundedChats} = data
    if(FoundedChats){
      console.log(FoundedChats,"Chat Exitst");
    navigate('/chat')
    }
  }

  return (

    <div>

      <div>

        <div className="w-full h-full mb-2" key={courseDetails?._id}>
          <div className="w-full h-72 bg-[#2d2f31] p-1 flex gap-1 ">
            <div className="w-3/5 h-full  pl-1 pr-1">
              <div className="w-2/3 h-8  flex justify-start items-center ">
                <h1 className='ml-7 p-1 text-white font-bold text-sm font-serif'>{courseDetails?.SelectedCategory}</h1>
                <h1 className="p-2 text-lg font-bold text-slate-400">&#62;</h1>
                <h1 className='text-white font-bold text-sm font-serif'>{courseDetails?.SelectedSubCategory}</h1>
              </div>
              <div className="w-full h-20  pl-4">
                <h1 className='text-white text-3xl font-bold font-serif underline'>{courseDetails?.courseTitle}</h1>
              </div>
              <div className="w-full h-16  pl-4">
                <h1 className='font-semibold text-lg text-white'>{courseDetails?.courseDescription}</h1>
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
                <h1 className='text-start font-semibold text-white'>Created By:{courseDetails?.Mentorname}</h1>
              </div>
            </div>
            <div className="w-2/5 h-full p-3 flex justify-center items-center">
              <div className="w-full h-full bg-white border-2 border-black">
                <video
                  controls
                  onContextMenu={(e) => e.preventDefault()}
                  src={`${courseDetails?.DemoVideoLocation}`}
                  className="w-full h-full object-cover"
                  controlsList="nodownload"
                  autoPlay
                  ref={VideoDurationRef}
                ></video>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-start gap-1 p-2">
          <div className="w-4/6 h-full  p-2 ">
            <div className="w-full h-full  border  border-black p-1  ">
              <div className="w-full h-10 flex justify-start items-center border-2 border-black">
                <h1 className='text-lg font-bold text-black ml-3 font-serif underline'>What you Learn with This Course</h1>
              </div>
              <div className="w-full h-fit ">
                <h1 className='font-semibold'>{courseDetails?.courseLearning}</h1>
              </div>
            </div>
            <div className="w-full h-full  mt-1 ">
              <div className="w-full h-full  border border-black p-1  ">
                <div className="w-full h-10 0 flex justify-start items-center border-2 border-black">
                  <h1 className='text-lg font-bold text-black ml-3 font-serif underline'>Classes and Duration</h1>
                </div>
                {courseDetails?.Class?.map((items) => (
                  <div className="w-full h-fit   flex gap-3 mt-1 mb-2 border-dashed border-black " key={items.classname}>
                    <div className="w-full h-full  flex justify-start items-center">
                      <h1 className='text-sm ml-1'>{items.classname}</h1>
                    </div>
                    <div className="w-2/6 h-full flex justify-center items-center">
                      <video
                        controls
                        onContextMenu={(e) => e.preventDefault()}
                        src={`${items?.classVideoLocation}`}
                        preload="metadata"
                        className="w-full h-full object-cover hidden"
                        controlsList="nodownload"
                        autoPlay
                        ref={VideoDurationRef}
                      ></video>
                      {Duration !== null ? (
                        <h1 className="text-sm text-blue-800 underline font-serif">
                          {formatDuration(Duration as number)}  
                        </h1>


                      ) : (
                        <span></span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-2/6 h-full  p-2 border-2 border-black bg-slate-300 ">
            <div className="w-full h-36 object-cover bg-red-300 border-2 border-black">
              <img src={courseDetails?.ThumbnailLocation} alt="Thumbnail" className='w-full h-full' />
            </div>
            <div className="w-full h-full  flex justify-center items-center">
              <h1 className='font-bold font-serif text-lg underline'>{courseDetails?.courseTitle}</h1>
            </div>
            <div className="w-full h-full  ">
              <div className="w-full h-full flex flex-justify-center items-center">
                <BsTextIndentLeft />
                <h1 className='font-bold text-sm ml-2'>{courseDetails?.courseIncludes}</h1>
              </div>
            </div>

            <div className="w-full h-full">
              {
                !isPayment ? (
                  <div>

                    <button
                      className="w-full h-10 bg-white border-2 border-black text-black mt-2 font-bold text-lg hover:bg-black hover:text-white hover:cursor-pointer"
                      onClick={() => {
                        navigate(`/Paypal/${courseDetails?._id}`);
                      }}
                    >
                      Purchase Course
                    </button>
                    <button
                      className="w-full h-10 bg-white border-2 border-black text-black mt-2 font-bold text-lg hover:bg-black hover:text-white hover:cursor-pointer "
                      onClick={() => navigate('/')}
                    >
                      Move back
                    </button>
                  </div>
                ) : (
                  <div>

                <button
                  className="w-full h-10 bg-white border-2 border-black text-black mt-2 font-bold text-lg hover:bg-black hover:text-white hover:cursor-pointer"
                  onClick={() => {
                    navigate(`/PurchasedCourse/${courseDetails?._id}`);
                  }}
                >
                  Go to Course
                </button>
                <button
                      className="w-full h-10 bg-white border-2 border-black text-black mt-2 font-bold text-lg hover:bg-black hover:text-white hover:cursor-pointer"
                      onClick={()=>{createRoom(courseDetails?.MentorId as string)}}
                    >
                      Message To {courseDetails?.Mentorname}
                    </button>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
