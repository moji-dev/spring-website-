import "./App.css";
import {Link, Outlet} from "react-router-dom"
import React from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"


export default function App() {
    return (
      <div className="App">
        <nav className="App-nav">
        <Link className="nav-link"><img style={{ width: 200, height: 81 }} src={'/logoresized.jpeg'} /></Link>
        <Link className="nav-link" to={'/'}>Home</Link>
        <Link className="nav-link" to={'/register'}>Sign Up</Link>
        <Link className="nav-link" to={'/login'}>Login</Link>
        </nav>
        <main className="App-main">
          <Sidebar/>
          <Outlet/>
        </main>
      </div>
    );
}
