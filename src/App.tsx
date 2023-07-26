import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./Pages/User/Home"
import SignIn from "./Pages/SignIn "
import login from "./Pages/login"
import './App.css'
import AdminLogin from "./Pages/Admin/AdminLogin"
import AdminDashboard from "./Pages/Admin/AdminDashboard"


function App() {


  return (
   <Router>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/signUp" Component={SignIn}  />
      <Route path="/Login" Component={login}/>
      {/*Admin Side */}
      <Route path="/EducartLogin" Component={AdminLogin} />
      <Route path="/EducartDash" Component={AdminDashboard}/>
    </Routes>
   </Router>
  )
}

export default App
