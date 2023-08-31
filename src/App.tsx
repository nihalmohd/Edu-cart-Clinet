// import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
// import UserRoutes from "./Routes/userRoutes"
// import MentorRoutes from "./Routes/MentorRoutes"
// import AdminRoutes from "./Routes/AdminRoutes"
// import './App.css'
// import Home from "./Pages/User/Home"
// import SignIn from "./Pages/SignIn "
// import AdminLogin from "./Pages/Admin/AdminLogin"
// import AdminDashboard from "./Pages/Admin/AdminDashboard"
// import ProtectedRoute from "./Pages/User/UserProtectedRouter"
// import MentorHome from "./Pages/Mentor/MentorHome"
// import MentorUsers from "./Pages/Mentor/MentorUsers"
// import AdminUsers from "./Pages/Admin/AdminUsers"
// import AdminProtectedRouter from "./Pages/Admin/AdminProtectedRouter"
// import AdminMentors from "./Pages/Admin/AdminMentors"
// import Login from "./Pages/Login"
// import MentoProtectedRouter from "./Pages/Mentor/MentoProtectedRouter"
// import AdminBanner from "./Pages/Admin/AdminBanner"
// import AdminCategory from "./Pages/Admin/AdminCategory"
// import MentorCourse from "./Pages/Mentor/MentorCourse"
// import CourseDetail from "./Pages/User/CourseDetail"
// import Paypal from "./Pages/User/Payment"
// import AdminCourses from "./Pages/Admin/AdminCourses"


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/userRoutes';
import MentorRoutes from './Routes/MentorRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/Educart/*" element={<AdminRoutes />} />
        <Route path="/Mentor/*" element={<MentorRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
