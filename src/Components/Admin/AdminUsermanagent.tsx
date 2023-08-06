import React,{useEffect,useState} from 'react'
import { axiosIntance } from '../../Api/config'

interface User {
    Email: string;
    Username: string;
    Status: boolean;
    _id:string
  }
const AdminUsermanagent :React.FC= () => {

    // const [blockUser,setBlockUsers]=useState <boolean>(true)
    const [getUser,SetGotUser]=useState<User []>([])
    useEffect(()=>{
        handleUsers()
        
    },[])
    const handleUsers=async ()=>{
        const {data}= await axiosIntance.post("/Admin/getUsers")
        SetGotUser(data.DisplayGetUser)
        console.log(data.DisplayGetUser);
    }
    const handleBlockUser= async(_id:string)=>{
       try {
        const {data}=await axiosIntance.post("/Admin/blockUser",{_id})
        handleUsers()
        console.log(data);
        // console.log(blockUser);
       } catch (error) {
        console.log(error);
       }
    }
    const handleUnBlockUser= async(_id:string)=>{
        try {
         const {data}=await axiosIntance.post("/Admin/UnblockUser",{_id})
         handleUsers()
         console.log(data);
        //  console.log(blockUser);
        } catch (error) {
         console.log(error);
        }
     }
    
  return (
    <div >
    <div className='p-3'> 
   <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
 <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
   <label htmlFor="table-search" className="sr-only">Search</label>
   <div className="relative">
     <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
       <svg
         className="w-4 h-4 text-gray-500 dark:text-gray-400"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 20 20"
       >
         <path
           stroke="currentColor"
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth="2"
           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
         />
       </svg>
     </div>
     <input
       type="text"
       id="table-search-users"
       className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       placeholder="Search for users"
     />
   </div>
 </div>
 <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
   <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
     <tr>
       <th scope="col" className="p-4">
         <div className="flex items-center">
           <input
             id="checkbox-all-search"
             type="checkbox"
             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
           />
           <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
         </div>
       </th>
       <th scope="col" className="px-6 py-3">
         Email
       </th>
       <th scope="col" className="px-6 py-3">
         Username
       </th>
       <th scope="col" className="px-6 py-3">
         Status
       </th>
       <th scope="col" className="px-6 py-3">
         Action
       </th>
     </tr>
   </thead>
   <tbody>
    {   
        getUser.map((item,index)=>
            <tr>
        <td className='p-2'>{index+1}</td>
        <td>{item.Email}</td>
        <td>{item.Username}</td>
        {item.Status?
        <td className='text-green-400' >Active</td>:
        <td className='text-red-500'>Non Active</td>}
        {item.Status===true?
        <td><button onClick={()=>handleBlockUser(item._id)} className='w-20 h-6 bg-red-600 rounded-3xl  text-center text-black  hover:cursor-pointer hover:scale-110 hover:bg-black hover:text-white hover:rounded-3xl '>Block</button></td>:
        <td><button onClick={()=>handleUnBlockUser(item._id)} className='w-20 h-6 bg-green-500  rounded-3xl  text-center text-black  hover:cursor-pointer hover:scale-110 hover:bg-black hover:text-white hover:rounded-3xl '>Unblock</button></td>}
    </tr>
    )}
    </tbody>
    </table>
    </div>
</div>
 </div>
  )
}

export default AdminUsermanagent