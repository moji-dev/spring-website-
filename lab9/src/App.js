import "./App.css";
import {Link, Outlet,BrowserRouter, Route, Switch } from "react-router-dom"
import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Registration from "./components/Registration";


export default function App() {
    return (
      //Implement the navigation menu, inside <nav></nav>
      //These should have <Link> elements for Home, Register, Login and Help
      //If you have implemented your Routes nested, do not forget to use <Outlet/>
      //inside the <main> to render the correct components 
      //See Slide 38, Lecture 8 for an example navigation and use of <Outlet/>
      <div className="App">
        <Header/>
        <nav className="App-nav">
          <Link className="nav-link" to ={'/home'}>Home</Link>
          <Link className="nav-link" to ={'/registration'}>Register</Link>
          <Link className="nav-link" to ={'/login'}>Login</Link>
          <Link className="nav-link" to ={'/help'}>Help</Link> 
        </nav>
        <main className="App-main">
          <Sidebar/>
          <div>
            <p>This should show the selected menu component, but now 
              set to show registration!
            </p>
            <Registration />
          </div>
        </main>
      </div>
    );
}
