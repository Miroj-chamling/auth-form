import React, { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { ActionTypes } from "../../constants/reducerActionTypers";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Auth.css";

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const clientId =
    "296660586296-n9u1ri299s6vlkt3g0jkhpv9ht7tvi36.apps.googleusercontent.com";

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accountSwitchHandler = (e) => {
    //e.preventDefault();
    setIsSignup((state) => !state);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  const googleSuccessHandler = async (res) => {
    console.log(res.profileObj);
    const response = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: ActionTypes.AUTH, payload: { response, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailureHandler = (error) => {
    console.log(error);
    //alert("Google signin was unsuccessful");
  };

  return (
    <div className="form-container">
      <h5>You can only google sign in for now.</h5>
      <form action="" className="register-form">
        {isSignup && (
          <>
            <input
              required
              autoFocus
              type="text"
              name="firstName"
              placeholder="FirstName"
              className="textField"
              id="first-name"
            />
            <input
              required
              autoFocus
              type="text"
              name="lastName"
              placeholder="LastName"
              className="textField"
              id="last-name"
            />
          </>
        )}
        <input
          required
          autoFocus
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          className="textField"
        />
        <input
          required
          autoFocus
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="textField"
        />
        {isSignup && (
          <>
            <input
              required
              autoFocus
              type="password"
              name="password"
              id="password"
              placeholder="Confirm Password"
              className="textField"
            />
          </>
        )}
        <button type="submit">{isSignup ? "Sign Up" : "Sign in"}</button>
        <GoogleLogin
          clientId={clientId}
          disabled={false}
          onSuccess={googleSuccessHandler}
          onFailure={googleFailureHandler}
        ></GoogleLogin>
        <p>
          {isSignup ? "Already have an account? " : "Don't have an account?"}
          &nbsp;
          <button onClick={accountSwitchHandler}>
            {isSignup ? "SignIn" : "SignUp"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Auth;
