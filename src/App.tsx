
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';
import MentorRoutes from './Routes/MentorRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import './App.css';
import Pagenotfound from './Pages/404page/pagenotfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/Educart/*" element={<AdminRoutes />} />
        <Route path="/Mentor/*" element={<MentorRoutes />} />
        <Route path='*' element={<Pagenotfound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
