import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Registration() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const repPassword = useRef();
  const tos = useRef();

  const validateForm = () => {
    let formValid = false;

    if (
      username.current.validity.valueMissing ||
      email.current.validity.valueMissing ||
      password.current.validity.valueMissing ||
      repPassword.current.validity.valueMissing
    ) {
      alert("Please fill in all text fields.");
    } else if (email.current.validity.typeMismatch) {
      alert("Invalid e-mail address. Please enter your e-mail again.");
    } else if (password.current.validity.tooShort) {
      alert("Password is too short. Please select another password");
    } else if (password.current.value !== repPassword.current.value) {
      alert("Passwords do not match. Please retry");
    } else if (tos.current.validity.valueMissing) {
      alert("Please agree to the Terms and Conditions, and Privacy Policy.");
    } else {
      formValid = true;
    }
    return formValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      axios
        .post("http://localhost:8080/register", {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("Registered successfully.");
          }
        })
        .then(() => {
          username.current.value = "";
          email.current.value = "";
          password.current.value = "";
          repPassword.current.value = "";
          tos.current.checked = false;
        })
        .catch((error) => {
          console.log(error);
          alert(error.response.data);
        });
    }
  };
    

    return (

        
      <div class ="container">
        <form class="registration" noValidate onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div class="form-group">
          <label class="registerText">Username: </label>
          <input class="registerInput" type="text" ref={username} required></input><br/><br/>
        </div>
        <div class="form-group">
          <label class="registerText">Email:</label>
          <input class="registerInput" type="email" ref={email} name="email" required></input><br/><br/>
        </div>
        <div class="form-group">
          <label class="registerText">Password:</label>
          <input class="registerInput" type="password" ref={password} name="password" required minLength="8"></input><br/><br/>
        </div>
        <div class="form-group">
          <label class="registerText">Re-type password:</label>
          <input class="registerInput" type="password" ref={repPassword} name="repPassword" required></input><br/><br/>
        </div>
        <div class="form-group">
          <input type="checkbox" ref={tos} name="tos" value="tos" required></input>
          <label>I agree to the Terms of Use and Privacy Policy.</label>
          <br/><br/>
        </div>
        <div class="form-group">
          <input class="registerButton" type="submit" value="Submit"></input>
          <Link class="learnMoreLink" to={'/help'}>Learn more</Link>
        </div>
      </form>
    </div>
        
      )
    }
