import React from "react";
import ChatNav from "./ChatNav";

const Chatside = () => {
    return (
        <div className="flex gap-1">
            <div className="w-3/12 h-screen  relative  border border-black flex gap-2 mt-2 p-1 ">
                <div className="w-full h-full  0">
                        <div className="w-full h-8  ">
                            <h1 className="font-semibold text-lg">Chats</h1>
                        </div>
                        <div className="w-full bg-gray-100 h-10 mt-1 ">
                            <input
                                type="text"
                                className="w-full h-full bg-transparent border object-cover rounded-md border-black p-2"
                                placeholder="Search users"
                            />
                        </div>
                    <div className="w-full h-[468px] overflow-auto mt-2 bg-gray-100">

                    <div className="w-full h-16 mt-1 bg-white border border-black">
                        <div className="w-full h-full  p-1  flex gap-1">
                            <div className="w-3/12 h-full  flex justify-center items-center">
                                <div className="w-14 h-14 rounded-full ">
                                    <img
                                        src="https://res.cloudinary.com/dgb07yvbv/image/upload/v1694102277/uibg2w6q56ybr77bgotd.png"
                                        className="w-fit h-fit object-cover"
                                        alt="No image founded"
                                    />
                                </div>
                            </div>
                            <div className="w-full h-full ">
                                <div className="w-full h-1/2  flex items-center">
                                    <h1 className="font-semibold ml-1 text-lg">Mohd nihal</h1>
                                </div>
                                <div className="w-full  h-1/2 ">
                                    <h1 className="font-thin text-gray-500 text-sm ml-1">Heloo</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    </div>
                    </div>
                </div>
                <ChatNav/>
            </div>
        
    );
};

export default Chatside;
