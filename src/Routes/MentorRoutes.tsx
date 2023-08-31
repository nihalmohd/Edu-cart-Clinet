import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MentorHome from "../Pages/Mentor/MentorHome";
import MentoProtectedRouter from "../Pages/Mentor/MentoProtectedRouter";
import MentorUsers from "../Pages/Mentor/MentorUsers";
import MentorCourse from "../Pages/Mentor/MentorCourse";

const MentorRoutes = () => {
    return (
        <Routes>
            <Route path="MentorHome" element={<MentoProtectedRouter><MentorHome /></MentoProtectedRouter>} />
            <Route path="MentorUsers" element={<MentoProtectedRouter><MentorUsers /></MentoProtectedRouter>} />
            <Route path="MentorCourse" element={<MentoProtectedRouter><MentorCourse /></MentoProtectedRouter>} />
        </Routes>
    )
}

export default MentorRoutes