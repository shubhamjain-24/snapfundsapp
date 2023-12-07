import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import logo from "../../Images/logo2.png";
import "./Navbar.css";

const Navbar = () => {
  // State to manage the click state for mobile responsiveness
  const [click, setClick] = useState(false);

  // Function to handle the click event on the hamburger menu icon
  const handleClick = () => setClick(!click);

  return (
    <>
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="nav-container">
          {/* Logo */}
          <span className="nav-logo">
            <img src={logo} alt="Logo" className="logo_img" />
          </span>

          {/* Navigation menu */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* Navigation items */}
            <NavItem to="/" text="HOME" onClick={handleClick} />
            <NavItem to="/loan" text="LOAN" onClick={handleClick} />
            <NavItem to="/aboutUs" text="ABOUT US" onClick={handleClick} />
            <NavItem to="/contactUs" text="CONTACT US" onClick={handleClick} />
            <NavItem to="/login" text="LOGIN" onClick={handleClick} />
          </ul>

          {/* Hamburger menu icon */}
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                {/* Close icon when menu is active */}
                <RxCross2 />
              </span>
            ) : (
              <span className="icon">
                {/* Hamburger menu icon when menu is not active */}
                <GiHamburgerMenu />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

// Component for individual navigation items
const NavItem = ({ to, text, onClick }) => (
  <li className="nav-item">
    <NavLink exact to={to} activeClassName="active" className="nav-links" onClick={onClick}>
      {text}
    </NavLink>
  </li>
);

export default Navbar;
