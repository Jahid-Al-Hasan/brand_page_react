// import React from "react";

import { NavLink } from "react-router-dom";
import "../App.css";
import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  // fetch data from web server
  const [getData, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api");
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <nav>
      <h1
        style={{
          textDecoration: "none",
          backgroundColor: "yellowgreen",
          border: "2px solid black",
          textAlign: "center",
          fontSize: "3rem",
        }}
      >
        {"Jahid's portfolio"}
      </h1>

      <div>
        <h3>Fetch web server data</h3>
        {/* <p>{console.log(this.getFormData)}</p> */}
        <p>{getData}</p>
        {/* <input type="submit" name="submit" onSubmit={getFormData} /> */}
      </div>

      <ul style={{ listStyleType: "none" }}>
        <li>
          <NavLink
            style={{
              textDecoration: "none",
              margin: "2px 2px",
              border: "2px",
              textAlign: "center",
              fontSize: "1rem",
            }}
            to="/LogIn"
            className={({ isActive }) => `${isActive ? "active-link" : ""}`}
          >
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{
              textDecoration: "none",
              margin: "2px 2px",
              border: "2px",
              textAlign: "center",
              fontSize: "1rem",
            }}
            to="/SignUp"
            className={({ isActive }) => `${isActive ? "active-link" : ""}`}
          >
            Sign UP
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
