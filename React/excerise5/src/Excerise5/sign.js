import React, { useState } from 'react';
import LoginPage from './login';
import "./signstyle.css";
import Myaccount from './Myaccount';


  function Sign() {
 const [userName,setuserName] = useState("");
 const [Email,setEmail] = useState("");
 const [Password,setPassword] = useState("");
 const [redirectToLogin,setredirectToLogin] = useState(false);
 const [redirectToAccount, setRedirectToAccount] = useState(false);


  const  handleChange = (e) => {
      if(e.target.id == "userName"){
        setuserName(e.target.value);  
      }
      if(e.target.id == "Email"){
        setEmail(e.target.value);
      }
      if(e.target.id == "Password"){
        setPassword(e.target.value);
      }
    }

   const validateEmail = (email) => {
    const Email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;; 
        return Email.test(email);
    }

 const  validatePassword = (password) => {
        const lowercaseLetters = /[a-z]/g;
        const uppercaseLetters = /[A-Z]/g;
        const numbers = /[0-9]/g;

        return password.length >= 8 &&
               lowercaseLetters.test(password) &&
               uppercaseLetters.test(password) &&
               numbers.test(password);
    }

  const  signUp = () => {
       
        if (!userName || !Email || !Password) {
            alert('Please fill all fields');
            return;
        }

        if (!validateEmail(Email)) {
            alert("Please enter a valid email address");
            return;
        }

        if (!validatePassword(Password)) {
            alert('Password must be at least 8 characters long, including at least one lowercase letter, one uppercase letter, and one number.');
            return;
        }

        let userData = JSON.parse(localStorage.getItem("UserData")) || [];
        let logginUser = JSON.parse(localStorage.getItem("logginUser")) || [];
        // console.log(userData);
         
        let duplicateEmailCheck = userData.find(u => u.Email === Email);
        if (duplicateEmailCheck) {
            alert("Email already exists");
            return;
        }
        userData.push({ userName, Email, Password });
        logginUser.push({userName,Password});

        localStorage.setItem("UserData", JSON.stringify(userData));
        localStorage.setItem("logginUser",JSON.stringify(logginUser));


        alert("Sign up Successfully");
         
        setRedirectToAccount(true);
        setuserName("");
        setEmail("");
        setPassword("");

    }
    const  redirectToLoginPage = () => {
        setredirectToLogin({ redirectToLogin: true });
        }
        if (redirectToAccount) {
            return <Myaccount />;
        }
        if (redirectToLogin) {
            return <LoginPage />;
        }

        return (
            <div className='signup'>
                <h2>Sign Up</h2>

                <h4>Username</h4>
                <input type="text" id="userName" placeholder="UserName" value={userName} onChange={handleChange} />
                <h4>Email</h4>
                <input type="text" id="Email" placeholder="Email Address" value={Email} onChange={handleChange} />
                <h4>Password</h4>
                <input type="password" id="Password" placeholder="Password" value={Password} onChange={handleChange} />
                <br />
                <input id="login" type="button" value="Sign Up" onClick={signUp} />
                <p>Already registered?<a href='#' onClick={redirectToLoginPage}>Sign in</a></p>
            </div>
        );
    }

export default Sign;


