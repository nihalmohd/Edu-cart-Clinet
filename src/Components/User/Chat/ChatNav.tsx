
import Chating from './Chating'

const ChatNav = () => {
  return (
    <div className='w-full h-full  mt-2'>
       <div className="w-full h-full  border border-black ">
        <div className="w-full h-16  flex">
            <div className="w-1/12  ml-1 h-full  flex justify-center items-center">
                <div className=" w-14 h-14 rounded-full ">
                    <img src="https://res.cloudinary.com/dgb07yvbv/image/upload/v1694102277/uibg2w6q56ybr77bgotd.png" className='w-full h-full object-cover' alt="" />
                </div>
            </div>
            <div className="w-4/12 h-full ">
                <div className="w-full h-1/2">
                <h1 className="font-semibold ml-1 text-lg">Mohd nihal</h1>
                </div>
                <div className="w-full h-1/2 ">
                <h1 className="font-thin text-gray-500 text-sm ml-1">Last seen : 10:25 pm </h1>
                </div>

            </div>
        </div>
        {/* <div className="w-full h-full bg-slate-200 border border-black mt-1"></div> */}
       </div>
       <Chating/>
    </div>
  )
}

export default ChatNav