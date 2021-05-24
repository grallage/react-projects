import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "../button/Button";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  const handleClick = () => setShowMenu(!showMenu);
  const closeMobileMenu = () => setShowMenu(false);

  const changeBtnDisplay = () => {
    setShowBtn(window.innerWidth > 960);
  };

  useEffect(() => {
    changeBtnDisplay();
  }, []);
  window.addEventListener("resize", changeBtnDisplay);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          Lynn
          <i class="fas fa-dumbbell"></i>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={showMenu ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={showMenu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links-mobile" onClick={closeMobileMenu}>
              Join Us
            </Link>
          </li>
        </ul>

        {showBtn && <Button buttonStyle="btn--outline">JOIN US</Button>}
      </div>
    </nav>
  );
};

export default Navbar;
