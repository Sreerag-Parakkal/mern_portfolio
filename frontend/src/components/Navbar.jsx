import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Resume">
                Resume
              </a>
            </li>
          </ul>
          <a class="navbar-brand fw-bolder fs-4 mx-auto" href="/home">
            PORTFOLIO
          </a>
          <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill">
            <i className="me-2" />
            Login
          </NavLink>
          <NavLink to="/signup" className="btn btn-outline-primary ms-2 px-4 rounded-pill">
            <i className="me-2" />
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
