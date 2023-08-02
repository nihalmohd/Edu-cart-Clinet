import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./Pages/User/Home"
import SignIn from "./Pages/SignIn "
import './App.css'
import AdminLogin from "./Pages/Admin/AdminLogin"
import AdminDashboard from "./Pages/Admin/AdminDashboard"
import ProtectedRoute from "./Pages/User/UserProtectedRouter"
import MentorHome from "./Pages/Mentor/MentorHome"
import MentorUsers from "./Pages/Mentor/MentorUsers"
import AdminUsers from "./Pages/Admin/AdminUsers"
import AdminProtectedRouter from "./Pages/Admin/AdminProtectedRouter"
import AdminMentors from "./Pages/Admin/AdminMentors"
import Login from "./Pages/Login"
import MentoProtectedRouter from "./Pages/Mentor/MentoProtectedRouter"


function App() {


  return (
   <Router>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path="/signUp" element={<SignIn/>}  />
      <Route path="/Login" element={<Login />}/>
      {/*Admin Side */}
      <Route path="/EducartLogin" Component={AdminLogin} />
      <Route path="/EducartDash" Component={AdminDashboard}/>
      <Route path="/EducartUsers" element={<AdminProtectedRouter><AdminUsers/></AdminProtectedRouter>}/>
      <Route path="/EducartMentors" element={<AdminProtectedRouter><AdminMentors/></AdminProtectedRouter>}/>


      {/*Mentor Side */}
      <Route path="/MentorHome" element={<MentoProtectedRouter><MentorHome/></MentoProtectedRouter>}/>
      <Route path="/MentorUsers" element={<MentoProtectedRouter><MentorUsers/></MentoProtectedRouter>}/>
    </Routes>
   </Router>
  )
}

export default App
