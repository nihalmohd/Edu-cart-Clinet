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
import AdminBanner from "./Pages/Admin/AdminBanner"
import AdminCategory from "./Pages/Admin/AdminCategory"
import MentorCourse from "./Pages/Mentor/MentorCourse"
import CourseDetail from "./Pages/User/CourseDetail"
import Paypal from "./Pages/User/Payment"
import AdminCourses from "./Pages/Admin/AdminCourses"



function App() {


  return (
   <Router>
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />
      <Route path="/showCourse/:_id" element={<ProtectedRoute><CourseDetail/></ProtectedRoute>} />
      <Route path="/paypal" element={<ProtectedRoute><Paypal/></ProtectedRoute>} />
      <Route path="/signUp" element={<SignIn/>}/>
      <Route path="/Login" element={<Login/>}/>


      {/*Admin Side */}
      <Route path="/EducartLogin" Component={AdminLogin} />
      <Route path="/EducartDash" Component={AdminDashboard}/>
      <Route path="/EducartCategory" element={<AdminProtectedRouter><AdminCategory/></AdminProtectedRouter>}/>
      <Route path="/EducartUsers" element={<AdminProtectedRouter><AdminUsers/></AdminProtectedRouter>}/>
      <Route path="/EducartMentors" element={<AdminProtectedRouter><AdminMentors/></AdminProtectedRouter>}/>
      <Route path="/EducartBanner" element={<AdminProtectedRouter><AdminBanner/></AdminProtectedRouter>}/>
      <Route path="//EducartCourses" element={<AdminProtectedRouter><AdminCourses/></AdminProtectedRouter>}/>

      {/*Mentor Side */}
      <Route path="/MentorHome" element={<MentoProtectedRouter><MentorHome/></MentoProtectedRouter>}/>
      <Route path="/MentorUsers" element={<MentoProtectedRouter><MentorUsers/></MentoProtectedRouter>}/>
      <Route path="/MentorCourse" element={<MentoProtectedRouter><MentorCourse/></MentoProtectedRouter>}/>
    </Routes>
   </Router>
  )
}

export default App
