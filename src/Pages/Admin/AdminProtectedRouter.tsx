
import { useNavigate } from 'react-router-dom';

interface AdminProtectedRouterProps {
    children: React.ReactNode
}
const AdminProtectedRouter:React.FC<AdminProtectedRouterProps> = ({ children}): any => {
    const navigate=useNavigate()
    const User = JSON.parse(localStorage.getItem("Admin") as string);
    return User ? children: navigate("/EducartLogin") 
}

export default AdminProtectedRouter
