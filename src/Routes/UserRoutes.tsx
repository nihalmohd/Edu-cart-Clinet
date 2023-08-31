// UserRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../Pages/User/UserProtectedRouter';
import Home from '../Pages/User/Home';
import CourseDetail from '../Pages/User/CourseDetail';
import SignIn from '../Pages/SignIn ';
import Login from '../Pages/Login';
import Paypal from '../Pages/User/Payment';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="showCourse/:_id" element={<ProtectedRoute><CourseDetail /></ProtectedRoute>} />
      <Route path="paypal" element={<ProtectedRoute><Paypal /></ProtectedRoute>} />
      <Route path="signUp" element={<SignIn />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default UserRoutes;
