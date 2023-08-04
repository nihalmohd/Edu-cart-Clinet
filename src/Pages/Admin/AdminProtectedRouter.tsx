
import { Navigate } from 'react-router-dom';

interface AdminProtectedRouterProps {
    children: React.ReactNode
}
const AdminProtectedRouter:React.FC<AdminProtectedRouterProps> = ({ children}): any => {
    const Admin = JSON.parse(localStorage.getItem("Admin") as string);
    const {Adminlogincheck}=Admin
    console.log(Adminlogincheck);
    return Adminlogincheck ? children: <Navigate to={"/EducartLogin"}/>
}

export default AdminProtectedRouter
