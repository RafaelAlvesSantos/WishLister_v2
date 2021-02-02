import React, { useState } from "react";
import axios from "axios";

const Register = (props) => {
  // If token exists, it means user is logged in, redirect
  // To change route later
  if (localStorage.token) {
    props.history.push("dashboard");
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
    password2: "",
  });

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const { email, password, password2 } = user;

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) alert("Passwords do not match!");
    else {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios.post(
        "http://localhost:5000/api/users/register",
        { email, password },
        config
      );
      alert("User created successfully");
      props.history.push("login");
    }
  };

  return (
    <div className="wrap-login">
      <div className="login-box">
        <div className="login-box-img">
          <span className="login-box-img-1">REGISTER</span>
        </div>
        <form className="login-form" onSubmit={onSubmit}>
          <label htmlFor="email">EMAIL ADDRESS</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
          <label htmlFor="password2">REPEAT PASSWORD</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
          />
          <div className="login-form-button-space">
            <button
              type="submit"
              value="Register"
              className="login-form-button"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
