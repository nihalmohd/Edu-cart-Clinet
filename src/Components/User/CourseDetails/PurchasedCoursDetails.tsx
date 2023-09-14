import  { useEffect, useState } from "react";
import { axiosIntance } from "../../../Api/config";
import { useParams } from "react-router-dom";
import { GiRoundStar } from "react-icons/gi";
import { Rating } from "@material-tailwind/react";

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
  Class?: [
    { classVideoLocation: string; classname: string; ClassDescription: string }
  ];
  MentorId: string
  Mentorname: string;
  Status?: boolean;
}

interface SelectedClass {
  classVideoLocation: string;
  classname: string;
  ClassDescription: string;
}

const PurchasedCoursDetails = () => {

  const { _id } = useParams();
  const [courseDetails, setCourseDetails] = useState<Course>();
  const [selectedClass, SetSelectedClass] = useState<SelectedClass>();
  useEffect(() => {
    // takeCourseId(courseDetails?._id as string)
    SetSelectedClass(courseDetails?.Class?.[0] as SelectedClass);
  }, [courseDetails]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosIntance.get("/CourseDeatailsByid", {
          params: { _id },
        });
        const { FoundedCourseByid } = response.data;
        setCourseDetails(FoundedCourseByid);
        console.log(FoundedCourseByid);

      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    }

    fetchData();
  }, [_id]);

  // const takeCourseId = async (CourseId: string) =>{
  //     try {
  //       const { data } = await axiosIntance.post("/UpdatedCouseIdtake", { CourseId: CourseId })
  //       if (data) {
  //         console.log(data, "Nihalllalalalalalalalalall");
  //         const { FoundedCoursidonUser } = data
  //         setDatatCourseId(FoundedCoursidonUser)
  //         MangaeIspayment(dataCourseId as string, CourseId)
  //       } else {
  //         console.log("somte thing went wrong");
  //       }
  //     } catch (error) {
  //       console.log(error);

  //     }
  //   }

  // const MangaeIspayment = async (DataCourse_id: string, Courseid: string) => {
  //     console.log(DataCourse_id, ":this is course id by db", Courseid, ":this is courseid one this page");
  //     if (DataCourse_id === Courseid) {

  //       await setIspaymet(false)
  //     } else {
  //       await setIspaymet(true)
  //     }

  //   }

  return (
    <div>
      <div className="w-full h-full p-1  ">
        <div className="w-full h-20 bg-transparent  text-black border-2 border-black mt-2 ">
          <h1 className="text-center text-3xl underline">Educart Classes</h1>
          <h1 className=" text-black text-lg text-center">
            Unlock Your Learning Potential with Educart Classes
          </h1>
        </div>
        <div
          className="w-full  h-full flex gap-1 p-1  "
          key={selectedClass?.classname}
        >
          <div className="w-3/5 h-full border-2 border-black p-2 ">
            <div className="w-full h-[460px]">
              <video
                controls
                onContextMenu={(e) => e.preventDefault()}
                src={selectedClass?.classVideoLocation}
                className="w-full h-full object-cover"
                controlsList="nodownload"
                autoPlay
              ></video>
            </div>
            <div className="w-full h-14 mt-1 flex items-center">
              <h1 className="font-bold font-serif text-2xl text-black underline  ml-3">
                {" "}
                {selectedClass?.classname}
              </h1>
            </div>
            <div className="w-full h-full  mt-1">
              <h1 className="font-bold  text-lg text-gray-500  ml-3">
                {" "}
                {selectedClass?.ClassDescription}
              </h1>
            </div>
            <div className="w-full h-full  mt-1">
              <h1 className="font-bold  text-lg   ml-3">
                <Rating className="flex" />
              </h1>
            </div>
          </div>
          <div className="w-2/5 h-96 bg-slate-200 border-2 border-black p-1 overflow-auto">
            {courseDetails ? (
              courseDetails?.Class?.map((items, index) => (
                <div
                  className="w-full h-20 bg-white border border-black mt-1 p-1"
                  onClick={() => {
                    SetSelectedClass(items as SelectedClass);
                  }}
                >
                  <div className="w-full  h-full flex gap-2">
                    <div className="w-32 h-full ">
                      <video
                        src={items.classVideoLocation}
                        className="w-full h-full object-cover"
                      ></video>
                    </div>
                    <div className="w-full h-full -500">
                      <div className="w-full h-3/5  flex items-center overflow-x-auto scroll-m-0 scroll-mx-0">
                        <h1 className="font-serif font-semibold text-sm underline">
                          Class no <span>{index + 1}</span>:{items.classname}{" "}
                        </h1>
                      </div>
                      <div className="w-full h-2/5  overflow-x-hidden overflow-y-hidden">
                        <h1 className=" font-semibold text-sm text-gray-500 ">
                          {items.ClassDescription}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full p-1">
        <div className="w-full h-full  border-2 border-dashed border-black p-1">
          <div className="w-full h-10  border-2 border-black flex justify-center items-center ">
            <h1 className="font-serif text-2xl font-bold underline">
              Review and Rating
            </h1>
          </div>
          <div className="w-full h-full  border border-black p-2  ">
            <div className="w-full h-full  flex justify-end">
              <div className="w-11/12 h-full border-2 bg-slate-200 border-black rounded-t-xl rounded-l-xl mt-2 p-1">
                <div className="w-full h-full  ml-3  ">
                  <div className="w-2/4 h-16  flex justify-start items-center gap-2">
                    <div className="w-14 h-14 rounded-full  flex">
                      <img
                        className="w-fit h-fit object-cover"
                        src="https://res.cloudinary.com/dgb07yvbv/image/upload/v1694102277/uibg2w6q56ybr77bgotd.png"
                        alt="no image fouded"
                      />
                    </div>
                    <div className="w-full h-1/2  flex items-center">
                      <h1 className="font-semibold text-sm ">Mohd Nihal</h1>
                    </div>
                  </div>
                  <div className="w-full h-24 flex justify-start items-end">
                    <div className="w-11/12 h-full  p-1">
                      <div className="w-full h-20  ">
                        <div className="w-full h-8 flex justify-start items-center">
                          <div className="w-1/2 h-10   flex  items-center">
                            <h1 className="text-lg text-black font-semibold">
                              <GiRoundStar />
                            </h1>
                            <h1 className="text-lg text-black font-semibold">
                              <GiRoundStar />
                            </h1>
                            <h1 className="text-lg text-black font-semibold">
                              <GiRoundStar />
                            </h1>
                            <h1 className="text-lg text-black font-semibold">
                              <GiRoundStar />
                            </h1>
                            <h1 className="text-lg text-black font-semibold">
                              <GiRoundStar />
                            </h1>
                            <h1> </h1>
                            <h1 className="text-lg text-black font-semibold ml-5">
                              4.2
                            </h1>
                          </div>
                        </div>
                        <h1 className="font-semibold  text-xl text-clip">
                          Very helpfull course i ever seen{" "}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-11/12 h-full border-2 border-black rounded-r-2xl rounded-b-2xl mt-2 p-1">
              <div className="w-full h-full  ml-3  ">
                <div className="w-2/4 h-16  flex justify-start items-center gap-2">
                  <div className="w-14 h-14 rounded-full  flex">
                    <img
                      className="w-fit h-fit object-cover"
                      src="https://res.cloudinary.com/dgb07yvbv/image/upload/v1694102277/uibg2w6q56ybr77bgotd.png"
                      alt="no image fouded"
                    />
                  </div>
                  <div className="w-full h-1/2  flex items-center">
                    <h1 className="font-semibold text-sm ">Mohd Nihal</h1>
                  </div>
                </div>
                <div className="w-full h-24 flex justify-start items-end">
                  <div className="w-11/12 h-full  p-1">
                    <div className="w-full h-20  ">
                      <div className="w-full h-8 flex justify-start items-center">
                        <div className="w-1/2 h-10   flex  items-center">
                          <h1 className="text-lg text-black font-semibold">
                            <GiRoundStar />
                          </h1>
                          <h1 className="text-lg text-black font-semibold">
                            <GiRoundStar />
                          </h1>
                          <h1 className="text-lg text-black font-semibold">
                            <GiRoundStar />
                          </h1>
                          <h1 className="text-lg text-black font-semibold">
                            <GiRoundStar />
                          </h1>
                          <h1 className="text-lg text-black font-semibold">
                            <GiRoundStar />
                          </h1>
                          <h1> </h1>
                          <h1 className="text-lg text-black font-semibold ml-5">
                            4.2
                          </h1>
                        </div>
                      </div>
                      <h1 className="font-semibold  text-xl text-clip">
                        Nice work{" "}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form action="">
              <div className="w-full h-10  flex justify-start items-center gap-2 p-1 mt-2">
                <div className="w-11/12 h-10   ">
                  <input
                    type="text"
                    placeholder="Add your reviews here"
                    className="w-full h-10 border-2 pl-2 border-gray-400 rounded-xl"
                  />
                </div>
                <button className="border-2 border-black w-1/12 h-10 text-lg text-balck font-semibold hover:bg-black hover:text-white flex justify-center items-center rounded-sm">
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasedCoursDetails;
