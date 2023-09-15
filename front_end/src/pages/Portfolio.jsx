// import React from 'react'
// import Home from "./Home";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <h1>{"Welcome to Jahid's Portfolio"}</h1>
      <p>
        <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default Portfolio;
