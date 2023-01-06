import React, { useState } from "react";
import PropTypes from "prop-types";


async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then(response => {
    if (response.status === 200) {
      console.log("Successful login")
      return response.json();
    } else {
      alert("Please enter a valid username or password")
      throw new Error("Invalid username or password.");
    }
  });
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Fill in both the login fields.");
    } else {
      try {
        const token = await loginUser({
          username,
          password,
        });

        setToken(token);
        
        setIsLoggedIn(true);

      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="login-wrapper">
      {isLoggedIn && <div className="logged-in-banner">You are logged in!</div>}
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
