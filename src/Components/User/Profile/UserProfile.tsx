import React from 'react'
import {TbEdit} from "react-icons/tb"
import {SiCoursera} from 'react-icons/si'
import {TbHeartPlus,TbLockCog} from "react-icons/tb"
import {TiContacts} from "react-icons/ti"
import {BiLogOut} from "react-icons/bi"


const UserProfile = () => {

    return (
        <div>
            <div className="w-full h-screen ">
                <div className="w-full h-16 ">
                    <div className="w-1/4 h-full flex justify-center items-center">
                        <h1 className='font-serif text-2xl font-bold '>Profile & Settings</h1>
                    </div>
                </div>
                <div className="w-full h-full  p-1  ">
                    <div className="w-full h-full  flex">
                        <div className="w-3/5 h-full  p-1 flex justify-center">
                            <div className="w-[475px] h-[400px] bg-gray-100  border-2 border-black p-2 flex justify-center ">
                                <div className="w-full h-full   ">
                                    <div className="w-full h-10  flex justify-end items-end">
                                        <div className="w-10  h-full ">
                                            <h1 className=' text-3xl font-thin'><TbEdit/></h1>
                                            </div> 
                                    </div>
                                    <div className="w-full h-64  flex justify-center items-center ">
                                        <img src="\Images\profile-icon-png-910.png" alt="Profile Image" />
                                    </div>
                                    <div className="w-full h-20  p-1">
                                        <div className="w-full h-10  flex justify-center items-center">
                                            <h1 className='font-bold text-3xl text-center font-serif'>Username</h1>
                                        </div>
                                            <div className="w-full h-8 mt-1  flex justify-center items-center ">
                                                <h1 className='font-sm font-semibold text-center'>nihalmohd828@gmail.com</h1>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-4/5 h-full   p-1" >
                        <div className="w-full h-72  p-1 border-2 bg-gray-100 border-black">
                            <div className="w-full h-10 mt-3 p-1 flex gap-1 border border-black  hover:bg-black hover:text-white ">
                              <div className="w-16 h-full  flex justify-center items-center">
                                <h1 className='font-semibold text-3xl text-black  '><SiCoursera/></h1>
                              </div>
                              <div className="w-full h-full  flex justify-start items-center">
                              <h1 className='font-semibold text-xl p-1' >My course</h1>
                              </div>
                            </div>
                            <div className="w-full h-10 mt-3 p-1 flex gap-1 border border-black  hover:bg-black hover:text-white ">
                            <div className="w-16 h-full  flex justify-center items-center">
                                <h1 className='font-semibold text-3xl text-black'><TbLockCog/></h1>
                              </div>
                              <div className="w-full h-full  flex justify-start items-center">
                              <h1 className='font-semibold text-xl p-1' >Change Password</h1>
                              </div>
                            </div>
                            <div className="w-full h-10 mt-3 p-1 flex gap-1 border border-black  hover:bg-black hover:text-white ">
                            <div className="w-16 h-full  flex justify-center items-center">
                                <h1 className='font-semibold text-3xl text-black'><TbHeartPlus/></h1>
                              </div>
                              <div className="w-full h-full  flex justify-start items-center">
                              <h1 className='font-semibold text-xl p-1' >Whishlist</h1>
                              </div>
                            </div>
                            <div className="w-full h-10 mt-3  p-1 flex gap-1 border border-black hover:bg-black hover:text-white  ">
                            <div className="w-16 h-full  flex justify-center items-center">
                                <h1 className='font-semibold text-3xl text-black'><TiContacts/></h1>
                              </div>
                              <div className="w-full h-full  flex justify-start items-center">
                              <h1 className='font-semibold text-xl p-1' >Contact With Us</h1>
                              </div>
                            </div>
                            <div className="w-full h-10 mt-3  p-1 flex gap-1 border border-black hover:bg-black hover:text-white  ">
                            <div className="w-16 h-full  flex justify-center items-center">
                                <h1 className='font-semibold text-3xl text-black'><BiLogOut/></h1>
                              </div>
                              <div className="w-full h-full  flex justify-start items-center">
                              <h1 className='font-semibold text-xl p-1' >Logout</h1>
                              </div>
                            </div>
                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default UserProfile