import "./App.css";
import { Link, Outlet } from "react-router-dom";
import React from "react";
import ChatBot from "react-simple-chatbot";
import zenBot from "./components/zenBot";


export default function App() {
  
  return (
    <div className="App">
      <nav className="App-nav">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/Messages"}>
          Messages
        </Link>
        <Link className="nav-link" to={"/Forum"}>
          Forum
        </Link>
        <Link className="nav-link" to={"/Contacts"}>
          Contacts
        </Link>
        <Link className="nav-link" to={"/Login"}>
          Login
        </Link>
      </nav>
      <main className="App-main">
        <Outlet />
      </main>
    </div>
  );
}
