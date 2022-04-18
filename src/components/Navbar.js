import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { MdDarkMode } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header1 container">
        {/* This links is linked to the Home route. */}
        <Link to="/">
          <div className="logo">Where in the world do you want to go?</div>
        </Link>
        <div className="dark">
          <MdDarkMode></MdDarkMode>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
