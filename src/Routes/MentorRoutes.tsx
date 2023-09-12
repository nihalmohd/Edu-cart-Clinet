import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MentorHome from "../Pages/Mentor/MentorHome";
import MentoProtectedRouter from "../Pages/Mentor/MentoProtectedRouter";
import MentorUsers from "../Pages/Mentor/MentorUsers";
import MentorCourse from "../Pages/Mentor/MentorCourse";
import MentorCourseUpload from '../Pages/Mentor/MentorCourseUpload';
import MentorProfilePage from '../Pages/Mentor/MentorProfilePage';
import Pagenotfound from '../Pages/404page/Pagenotfound';
import MentorCourseDetailPage from '../Pages/Mentor/MentorCourseDetailPage';



const MentorRoutes = () => {
    return (
        <Routes>
            <Route path="MentorHome" element={<MentoProtectedRouter><MentorHome /></MentoProtectedRouter>} />
            <Route path="MentorUsers" element={<MentoProtectedRouter><MentorUsers /></MentoProtectedRouter>} />
            <Route path="MentorCourse" element={<MentoProtectedRouter><MentorCourse /></MentoProtectedRouter>} />
            <Route path='MentorCourseUpload' element={<MentoProtectedRouter><MentorCourseUpload /></MentoProtectedRouter>} />
            <Route path='MentorProfile' element={<MentoProtectedRouter><MentorProfilePage /></MentoProtectedRouter>} />
            <Route path='MentorCourseDetaild/:_id' element={<MentoProtectedRouter>< MentorCourseDetailPage/></MentoProtectedRouter>} />
            <Route path='*' element={<Pagenotfound/>}/>
        </Routes>
    )
}

export default MentorRoutes