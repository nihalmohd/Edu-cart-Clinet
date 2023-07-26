import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn "
import login from "./Pages/login"
import './App.css'

function App() {


  return (
   <Router>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/signUp" Component={SignIn}  />
      <Route path="/Login" Component={login}/>
    </Routes>
   </Router>
  )
}

export default App
