import { useEffect, useState } from "react";
import ChatNav from "./ChatNav";
import { axiosIntance } from "../../../Api/config";


interface mentor {
    _id:string;
    Username:string;
    Email:string;
    Password:string;
    ProfileImage:string
}


export interface Chat {
    UserId?:string
    MentorId?:[mentor]
    latestMessage?:string
  }


const Chatside = () => {
    const [MentorData,setMentorData] = useState<Chat[]>([])
    useEffect(()=>{
        ShowMetors()
    },[])
 const ShowMetors = async()=>{
 const {data} = await axiosIntance.get("/GetMentors")
 if(data){
     console.log(data); 
    const {FoundedUserChat} =data
    setMentorData(FoundedUserChat)
    console.log(FoundedUserChat,"haloo data form backend");
 }
 }


    return (
        <div className="flex gap-1 pl-1">
            <div className="w-3/12 h-screen  relative  border border-black flex gap-2 mt-2 p-1  ">
                <div className="w-full h-full  0">
                        <div className="w-full h-8  ">
                            <h1 className="font-semibold text-lg">Chats</h1>
                        </div>
                        <div className="w-full bg-gray-100 h-10 mt-1 ">
                            <input
                                type="text"
                                className="w-full h-full bg-white border object-cover rounded-md border-black p-2"
                                placeholder="Search users"
                            />
                        </div>
                    <div className="w-full h-[470px] overflow-auto mt-2 bg-gray-100">
                        {
                            MentorData?.map((itmes:any)=>(
                             
                                
                                
                                
                    <div className="w-full h-16 mt-1 bg-white border border-black">
                        <div className="w-full h-full  p-1  flex gap-1">
                            <div className="w-3/12 h-full  flex justify-center items-center">
                                <div className="w-14 h-14 rounded-full ">
                                    <img
                                        src={itmes.Mentor?.ProfileImage}
                                        className="w-fit h-fit object-cover"
                                        alt="No image founded"
                                    />
                                </div>
                            </div>
                            <div className="w-full h-full ">
                                <div className="w-full h-1/2  flex items-center">
                                    <h1 className="font-semibold ml-1 text-lg">{itmes.Mentor.Username}</h1>
                                </div>
                                <div className="w-full  h-1/2 ">
                                    <h1 className="font-thin text-gray-500 text-sm ml-1">Heloo</h1>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                            ))
                        }
                     
                    


                    </div>
                    </div>
                </div>
                <ChatNav/>
            </div>
        
    );
};

export default Chatside;
