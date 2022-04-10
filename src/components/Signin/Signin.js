import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";

const Signin = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="center">SignIn</h2>
        <hr />
        <form action="">
          <label htmlFor="email">email</label>
          <input type="email" name="emaile" id="" placeholder="email" />

          <label htmlFor="password">password</label>
          <input type="password" name="password" id="" placeholder="password" />

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
