
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
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
