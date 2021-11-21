import React, { useState } from "react";
import { Link } from "react-router-dom";
import { publicFetch } from "../util/fetch";

interface Props {}

const Signup = (props: Props) => {
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    const { data } = await publicFetch.post("signup", formInput);
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
          <p>Sign up for an account</p>
          Already have an account? <Link to="/login">Log in now</Link>
        </div>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formInput.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formInput.lastName}
            onChange={handleChange}
          />
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
          <input type="submit" value="Sign Up" onClick={handleSignUp} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
