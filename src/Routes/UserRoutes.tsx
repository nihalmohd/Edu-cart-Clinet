// UserRoutes.js
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../Pages/User/UserProtectedRouter';
import Home from '../Pages/User/Home';
import CourseDetail from '../Pages/User/CourseDetail';
import SignIn from '../Pages/SignIn ';
import Login from '../Pages/Login';
import Paypal from '../Pages/User/Payment';
import Loading from '../Loader/ButtonLoading/ButtonLoading';
import Profile from '../Pages/User/Profile';
import Mycourses from '../Pages/User/Mycourses';
import Categorypage from '../Pages/User/Categorypage';
import SubCategorypage from '../Pages/User/SubCategorypage';
import PurchasedCoursepage from '../Pages/User/PurchasedCoursepage';
import Pagenotfound from '../Pages/404page/Pagenotfound';
import ChatPage from '../Pages/User/ChatPage';






const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="showCourse/:_id" element={<ProtectedRoute><CourseDetail /></ProtectedRoute>} />
      <Route path="paypal/:_id" element={<ProtectedRoute><Paypal /></ProtectedRoute>} />
      <Route path="Profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="Mycourses" element={<ProtectedRoute><Mycourses /></ProtectedRoute>} />
      <Route path="Category" element={<ProtectedRoute><Categorypage /></ProtectedRoute>} />
      <Route path="SubCategory/:SelectedCategory" element={<ProtectedRoute>< SubCategorypage/></ProtectedRoute>} />
      <Route path="PurchasedCourse/:_id" element={<ProtectedRoute><PurchasedCoursepage /></ProtectedRoute>} />
      <Route path="chat" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
      <Route path="signUp" element={<SignIn />}/>
      <Route path="login" element={<Login />}/>
      <Route path='loading'element={<Loading/>}/>
      <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
  );
}

export default UserRoutes;
