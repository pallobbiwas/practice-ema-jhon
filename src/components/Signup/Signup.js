import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()
  // state for input value
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("");
  const [errors, seterrors] = useState("");

  //onblur function
  const emailBlur = (e) => {
    setEmail(e.target.value);
  };
  const nameBlur = (e) => {
    setName(e.target.value);
  };
  const PasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const rePasswordBlur = (e) => {
    setRePass(e.target.value);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (password !== rePass) {
      seterrors("password not match");
      return;
    }
    if (password < 6) {
      seterrors("password contain should be 6 charrector");
      return;
    }
    createUserWithEmailAndPassword(email, password, name);
  };
  if(user){
    navigate('/signin')
  }

  return (
    <div>
      <div className="form-container">
        <h1>sign up</h1>
        <hr />
        <form onSubmit={formSubmit} action="">
          <label htmlFor="email">email</label>
          <input
            onBlur={emailBlur}
            type="email"
            name="emaile"
            id=""
            placeholder="email"
            required
          />

          <label htmlFor="name">name</label>
          <input
            onBlur={nameBlur}
            type="text"
            name="name"
            id=""
            placeholder="name"
            required
          />

          <label htmlFor="password">password</label>
          <input
            onBlur={PasswordBlur}
            type="password"
            name="password"
            id=""
            placeholder="password"
            required
          />

          <p>{errors}</p>
          <label htmlFor="re-password">re-password</label>
          <input
            onBlur={rePasswordBlur}
            type="password"
            name="re-password"
            id=""
            placeholder="re-password"
            required
          />

          <div className="btn">
            <button>Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
