import React, { useState } from "react";
import { Link } from "react-router-dom";
import { publicFetch } from "../util/fetch";

interface Props {}

const Login = (props: Props) => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { data } = await publicFetch.post("login", formInput);
    console.log(data);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div>
        <div>
          Log in to your account Don't have an account?
          <Link to="/signup">Sign up now</Link>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formInput.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formInput.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="Login" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
