import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Signin.css";

const Signin = () => {
  const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate()
  //blur input
  const emailBlur = (e) => {
    setEmail(e.target.value);
  };
  const passBluer = (e) => {
    setPass(e.target.value);
  };
  const fromSubmit = (e) =>{
    e.preventDefault();
    signInWithEmailAndPassword(email, pass)
  }
  if(user){
    navigate('/shop')
  }
  return (
    <div className="form-container">
      <div>
        <h2 className="center">SignIn</h2>
        <hr />
        <form onSubmit={fromSubmit} action="">
          <label htmlFor="email">email</label>
          <input
            onBlur={emailBlur}
            type="email"
            name="emaile"
            id=""
            placeholder="email"
          />

          <label htmlFor="password">password</label>
          <input
            onBlur={passBluer}
            type="password"
            name="password"
            id=""
            placeholder="password"
          />

          <div className="btn">
            <button>Signin</button>
          </div>
        </form>
        <p className="text">
          New in ema-jon ?
          <small>
            <Link to="/signup">sign up here</Link>
          </small>
        </p>
      </div>
      <div className="google">
        <button>signin with google</button>
      </div>
    </div>
  );
};

export default Signin;
