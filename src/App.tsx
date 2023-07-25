import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn "
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'

function App() {


  return (
   <Router>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Auth" Component={SignIn}  />
    </Routes>
   </Router>
  )
}

export default App
