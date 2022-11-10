import React, { useRef } from "react";
import { auth } from "../firebase";

import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null); // gets the values from the input
  const passwordRef = useRef(null); // gets the values from the input

  const register = (e) => {
    e.preventDefault(); // stops reload

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault(); // stops reload
    if (emailRef != null  || passwordRef != null){

      auth
        .signInWithEmailAndPassword(
          emailRef.current.value,
          passwordRef.current.value
        )
        .then((authUser) => {
          console.log(authUser);
        })
        .catch((error) => {
          alert(error.message);
        });

    } else{
    //  <Alert severity="error">This is an error alert — check it out!</Alert>
      alert('Complete with email or password');
    }
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' required/>
        <input ref={passwordRef} placeholder='Password' type='password' required />
        <button type='submit' onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className='signupScreen__gray'>New to Netflix?</span>{" "}
          <span className='signupScreen__link' onClick={register}>
            Sign up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
