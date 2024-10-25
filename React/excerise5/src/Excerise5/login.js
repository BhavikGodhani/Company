import React, { useState } from 'react';
import "./loginstyle.css";
import Sign from './sign';
import Myaccount from './Myaccount';

function LoginPage() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [redirectToSignup, setRedirectToSignUp] = useState(false);
    const [redirectToAccount, setRedirectToAccount] = useState(false);

    const handleChange = (e) => {
        if (e.target.id == "Email") {
            setEmail(e.target.value);
        }
        else if (e.target.id == "Password") {
            setPassword(e.target.value);
        }
    }

    const login = () => {
        const data = JSON.parse(localStorage.getItem("UserData")) || [];
        
        if (!Email || !Password) {
            alert("Please check Email and Password");
            return;
        }
        
        const User = data.find(user => user.Email === Email && user.Password === Password);
        //  console.log(User);
        if (User) {
            localStorage.setItem("logginUser",JSON.stringify(User));
            alert("Login Successfully");
            setRedirectToAccount(true);
        } 
        else {
            alert("Invalid Email or Password");
            setEmail("");
            setPassword("");
        }
    };
    

    const handleRedirectToSignup = (e) => {
        e.preventDefault();
        setRedirectToSignUp({ redirectToSignup: true });
    }

    if (redirectToSignup) {
         return <Sign />;
    }
    if (redirectToAccount) {
         return <Myaccount />;
    }
    return (
        <div className='container'>
            <h2>Login</h2>

            <h4>Email</h4>
            <input type="text" id="Email" placeholder="Email Address" value={Email} onChange={handleChange} />
            <h4>Password</h4>
            <input type="password" id="Password" placeholder="Password" value={Password} onChange={handleChange} />
            <br />
            <input id="login" type="button" value="Sign in" onClick={login} />
            <p>Don't have an account? <a href="#" onClick={handleRedirectToSignup}>Sign Up</a></p>
        </div>

    )

}
export default LoginPage;

