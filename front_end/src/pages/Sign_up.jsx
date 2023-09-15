// import React from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign_up.css";
// import axios from "axios";

export default function Sign_up() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // let name, value;
  const handleInputs = (e) => {
    // let name = e.target.name;
    // let value = e.target.value;
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  //handle Form Submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // const { first_name, last_name, email, password, confirmPassword } = user;

    await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 200) {
          navigate("/portfolio");
        } else if (res.status === 409) {
          alert("Already have an account with this email");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // get the status code from the response
    // const status = Response.status;
    // if (status === 200) {
    //   navigate("/portfolio");
    // } else if (status === 409) {
    //   alert("Already have an account with this email");
    // }
  };

  return (
    <div className="main_div">
      <h1 style={{ color: "", marginLeft: "5px" }}>Sign Up</h1>

      <form
        // action="/register"
        // method="POST"
        onSubmit={handleFormSubmit}
        className="formStyle"
      >
        <div className="nameToSubmit">
          <div className="nameStyle">
            <div>
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                id="first_name"
                value={user.first_name}
                onChange={handleInputs}
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                id="last_name"
                value={user.last_name}
                onChange={handleInputs}
                required
              />
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              value={user.email}
              onChange={handleInputs}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={user.password}
              onChange={handleInputs}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputs}
              required
            />
          </div>

          <div className="checkBox_div">
            <p>
              <input
                type="checkbox"
                name="cleckbox"
                className="checkbox"
                required
              />
              I Agree with
              <a href="#" style={{ color: "red", textDecoration: "none" }}>
                &nbsp; privacy
              </a>{" "}
              and{" "}
              <a href="#" style={{ color: "red", textDecoration: "none" }}>
                policy
              </a>
            </p>
          </div>

          <div>
            <input
              type="submit"
              name="submit"
              id="submit"
              // onClick={postData}
              placeholder="Sign up"
            />
          </div>
        </div>
      </form>
      <div className="footer">
        <p>
          <br />
          <br />
          Already have an account? &nbsp;&nbsp;&nbsp;
          <Link
            to="/LogIn"
            style={{ color: "rgb(270, 6, 39)", textDecoration: "none" }}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
