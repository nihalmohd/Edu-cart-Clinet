import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./Pages/User/Home"
import SignIn from "./Pages/SignIn "
import login from "./Pages/login"
import './App.css'
import AdminLogin from "./Pages/Admin/AdminLogin"
import AdminDashboard from "./Pages/Admin/AdminDashboard"
import ProtectedRoute from "./Pages/User/UserProtectedRouter"
import MentorHome from "./Pages/Mentor/MentorHome"
import MentorUsers from "./Pages/Mentor/MentorUsers"
import AdminUsers from "./Pages/Admin/AdminUsers"


function App() {


  return (
   <Router>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path="/signUp" Component={SignIn}  />
      <Route path="/Login" Component={login}/>
      {/*Admin Side */}
      <Route path="/EducartLogin" Component={AdminLogin} />
      <Route path="/EducartDash" Component={AdminDashboard}/>
      <Route path="/EducartUsers" element={<AdminUsers/>}/>

      {/*Mentor Side */}
      <Route path="/MentorHome" element={<MentorHome/>}/>
      <Route path="/MentorUsers" element={<MentorUsers/>}/>
    </Routes>
   </Router>
  )
}

export default App
