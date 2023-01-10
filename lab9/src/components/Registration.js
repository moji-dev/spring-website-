import React, {useRef} from "react";
//import {Link} from "react-router-dom";
//import axios from "axios";


export default function Registration(){
    //ToDo: Implement an uncontrolled form component
    //(See Slides 28-29 for useRef)
    const name=undefined;
    const email=undefined;
    const password=undefined;
    const repPassword=undefined;
    const buyer=undefined;
    const seller=undefined;
    const tos=undefined;

    //There is nothing to do here. 
    //This is the same validateForm function from Week 3 lab solutions
    //However, it expects to read current.validity to use the HTML5
    //form validation meta-data
    const validateForm = () => {
        let formValid = false;

        if(!name || !email || !password || !repPassword || !buyer || !tos){
            alert("Form inputs not defined");
            return formValid;
        }

        if (name.current.validity.valueMissing 
            || email.current.validity.valueMissing 
            || password.current.validity.valueMissing
            || repPassword.current.validity.valueMissing){
                alert("Please fill in all text fields.");
        }
        else if (email.current.validity.typeMismatch){
            alert("Invalid e-mail address. Please enter your e-mail again.");
        }else if (password.current.validity.tooShort){
            alert("Password is too short. Please select another password");
        } else if(password.value !== repPassword.value) {
            alert("Passwords do not match. Please retry");
        } else if (!buyer.current.checked && !seller.current.checked){
            alert("Please check at least one checkbox to select being a seller or a buyer in the system.")
        } else if (tos.current.validity.valueMissing){
            alert("Please agree to the Terms and Conditions, and Privacy Policy.")
        }else{
            formValid = true;
        }
        return formValid;
    }

    //This is the submit function called when the user 
    //submit the registration form
    const handleSubmit = (event) => {
        event.preventDefault();

        //ToDo: If the form validates, use an axios call 
        //to send the name, email, password, and the information 
        //about whether the user is a buyer or a seller to 
        //the 'https://reqres.in/api/users endpoint
        //You will need a POST call
        //See Slides 33-34 regarding data fetching (note you do not
        //need a useEffect hook here)
        //See the example https://axios-http.com/docs/post_example
        if(validateForm()){
            alert("Registration not sent");
        }
      }

    return (
        //ToDo: When using useRef, you need to add a ref for each form element
        //so that React can get a reference to the different elements.
        //The rest of the form is implemented similarly to the Week 3 Lab solutions.
        //Add <Link to={'/help'}>Learn more</Link> when you implemented the Router
        <form className="registration" noValidate onSubmit={handleSubmit}>
            <label className="labelText">Name: </label>
            <input type="text" required/><br/><br/>

            <label className="labelText">Email:</label>
            <input type="email" name="email" required/><br/><br/>

            <label className="labelText">Password:</label>
            <input type="password" name="password" required minLength="8"/><br/><br/>

            <label className="labelText">Re-type password:</label>
            <input type="password" name="repPassword" required/><br/><br/>

            <input type="checkbox" name="buyer"/>
            <label>I want to buy produce directly from allotment owners.</label><br/>

            <input type="checkbox" name="seller"/>
            <label>I want to sell produce from my allotment.</label><br/><br/>

            <input type="checkbox" name="tos" required/>
            <label>I agree to the Terms of Use and Privacy Policy.</label>
            <br/><br/>

            <input type="submit" value="Submit"/>
        </form>
    )
}