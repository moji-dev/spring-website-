import {Routes, Route, BrowserRouter as Router} from "react-router-dom"
import App from "./App";
import Help from "./components/Help"
import Home from "./components/Home"
import Login from "./components/Login"
import Registration from "./components/Registration"

//This code expects separate components for each sub-page 
//These components - Registration, Home, Login and Help - 
//are under a "components" folder


export default function AppRouter(){
  return (
    //Replace the <App /> with a Router.
    //Implement routes corresponding to Home, Registration, Login, Help.
    //Consider the example router configuration in Slide 36, Week 8 Lecture
  //<App />
  <Router>
    <Routes>
      <Route path={'/'} element={<App />}>  </Route>
      <Route path={'/home'} element={<Home />}>  </Route>
      <Route path={'/registration'} element={<Registration/>}>  </Route>
      <Route path={'/login'} element ={<Login/>}> </Route>
      <Route path={'/help'} element ={<Help/>}> </Route>

     
    </Routes>
  </Router>
  )
}