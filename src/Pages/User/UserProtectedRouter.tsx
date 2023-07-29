import React from 'react'
import { useNavigate } from "react-router-dom"

interface UserProtectedRouterProps {
    children: React.ReactNode
}


const UserProtectedRouter:React.FC<UserProtectedRouterProps> = ({ children}): any => {
    const navigate=useNavigate()
    const User = JSON.parse(localStorage.getItem("User") as any);
    return User ? children: navigate("/Signup") 
}
export default UserProtectedRouter
