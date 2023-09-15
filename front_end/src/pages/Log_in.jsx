import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./sign_up.css";

export default function Log_in() {
  let navigate = useNavigate();
  // get email and password
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //set email and password
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // handle form when submitted
  const handleSubmittedForm = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.status === 200) {
          navigate("/portfolio");
        } else if (res.status === 401) {
          alert("Email or Password not match");
        }
      })
      .catch((error) => {
        console.log({ "message:": error });
      });
  };

  return (
    <div className="main_div">
      <h1 style={{ color: "", marginLeft: "5px" }}>Log In</h1>

      <form className="formStyle" onSubmit={handleSubmittedForm}>
        <div className="nameToSubmit">
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

          <div className="checkBox_div">
            <p>
              <input type="checkbox" name="cleckbox" className="checkbox" />
              Remember me
              <a
                href="#"
                style={{
                  color: "red",
                  textDecoration: "none",
                  // marginLeft: "100px",
                  position: "relative",
                  right: "-140px",
                }}
              >
                &nbsp;&nbsp;&nbsp;Forgot password
              </a>
            </p>
          </div>

          <div>
            {/* <input type="submit" value="Log In" id="logIn" /> */}
            <button type="submit" id="submit">
              Log In
            </button>
          </div>
        </div>
      </form>
      <div className="footer">
        <p>
          Or sign in with <br />
        </p>
        <i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
        &nbsp;&nbsp;
        <i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i>
        &nbsp;&nbsp;
        <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
        <br />
        <br />
        <br />
        <br />
        <p>
          Don&rsquo;t have any account? &nbsp;&nbsp;
          <Link to="/SignUp" style={{ color: "red", textDecoration: "none" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
