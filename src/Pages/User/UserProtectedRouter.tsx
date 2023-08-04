import React from 'react'
import { Navigate } from "react-router-dom"

interface UserProtectedRouterProps {
    children: React.ReactNode
}


const UserProtectedRouter:React.FC<UserProtectedRouterProps> = ({ children}): any => {
    const User = JSON.parse(localStorage.getItem("User") as any);
    console.log(User,"prottectd routil yethiiiiiii");
    return User ? children: <Navigate to={"/Login"}/>
}
export default UserProtectedRouter
