import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {

  const navStyle = ({ isActive }) => {
    return isActive
      ? "nav-link active"
      : "nav-link";
  };

  return (
    <nav className="navbar">

      {/* LEFT SIDE */}

      <NavLink to="/" className="logo">
        Shop<span>Zone</span>
      </NavLink>


      {/* RIGHT SIDE */}

      <div className="nav-links">

        <NavLink
          to="/"
          className={navStyle}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={navStyle}
        >
          About
        </NavLink>

        <NavLink
          to="/product"
          className={navStyle}
        >
          Products
        </NavLink>

        <NavLink
          to="/login"
          className={navStyle}
        >
          Login
        </NavLink>

      </div>

    </nav>
  );
};

export default Navbar;