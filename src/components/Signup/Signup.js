import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="form-container">
        <h1>sign up</h1>
        <hr />
        <form action="">
          <label htmlFor="email">email</label>
          <input type="email" name="emaile" id="" placeholder="email" />

          <label htmlFor="name">name</label>
          <input type="text" name="name" id="" placeholder="name" />

          <label htmlFor="password">password</label>
          <input type="password" name="password" id="" placeholder="password" />

          <label htmlFor="re-password">re-password</label>
          <input type="password" name="re-password" id="" placeholder="re-password" />

          <div className="btn">
            <button>Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
