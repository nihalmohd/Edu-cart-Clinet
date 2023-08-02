import { useEffect, useState } from "react";
import { axiosIntance } from "../../Api/config";


interface Mentor {
  Email: string;
  Username: string;
  Status: boolean;
  _id:string
}

const AdminMentorManagment = () => {
  const [GetMentor,SetGotMentor]=useState<Mentor [] >([])
  useEffect(()=>{
    handleMentors()
  },[])

  const handleMentors=async ()=>{
    const {data}= await axiosIntance.post("/Admin/getMentors")
    SetGotMentor(data.DisplayGetUser)
    console.log(data.DisplayGetUser);
}
const handleBlockMentor=async (_id:string)=>{
try {
  const {data}=await axiosIntance.post("/Admin/blockMentor",{_id})
  handleMentors()
  console.log(data);
} catch (error) {
  console.log(error);
  
}

}
const handleUnBlockMentor=async (_id:string)=>{
  try {
    const {data}=await axiosIntance.post("/Admin/UnblockMentor",{_id})
    handleMentors()
    console.log(data);
  } catch (error) {
    console.log(error);
    
  }
  
  }

  return (
    <div>
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
      GetMentor.map((items,index)=>
       <tr>
        <td className='p-2'>{index+1}</td>
        <td>{items.Email}</td>
        <td>{items.Username}</td>
        {items.Status?
        <td className='text-green-400' >Active</td>:
        <td className='text-red-500'>Non Active</td>}
        {items.Status===true?
        <td><button className='w-20 h-6 bg-red-600 rounded-3xl  text-center text-black  hover:cursor-pointer hover:scale-110 hover:bg-black hover:text-white hover:rounded-3xl' onClick={()=>handleBlockMentor(items._id)} >Block</button></td>:
        <td><button className='w-20 h-6 bg-green-500  rounded-3xl  text-center text-black  hover:cursor-pointer hover:scale-110 hover:bg-black hover:text-white hover:rounded-3xl' onClick={()=>handleUnBlockMentor(items._id)} >Unblock</button></td>}
    </tr>
      )}
    </tbody>
    </table>
    </div>
</div>
 </div>
  )
}

export default AdminMentorManagment