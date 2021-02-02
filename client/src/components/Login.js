import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  if (localStorage.token) {
    props.history.push("dashboard");
  }
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "include",
    };

    const res = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password },
      config
    );
    // console.log(res.data.token);
    // Acess token from request
    localStorage.setItem("token", res.data.token);
    alert("You are now logged in");
  };
  return (
    <div className="wrap-login">
      <div className="login-box">
        <div className="login-box-img">
          <span className="login-box-img-1">LOG IN</span>
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
          <div className="login-form-button-space">
            <button type="submit" value="Login" className="login-form-button">
              Login
            </button>
          </div>
        </form>
        <Link to="/login/2">CLICK ME</Link>
      </div>
    </div>
  );
};

export default Login;
