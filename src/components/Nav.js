import React from "react";
import logo from "../images/sharingan.png";
function Nav({ activeMenu, toggleMenu }) {
  return (
    <nav className="nav nav-main">
      <ul className="nav-items">
        <li className="nav-item">
          <span className="hamMenu" onClick={toggleMenu}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
          <a href="/" className="nav-logo">
            <img src={logo} alt="logo" className="logo" />
            GlitchPop
          </a>
        </li>
        <div style={{display:"flex"}}>
          <li className="nav-item">
            <a href="https://github.com/t-rex777">
              <i
                className="fa fa-github nav-social"
                aria-hidden="true"
                
              ></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/manish-kumar-sahu-b58a08131">
              <i
                className="fa fa-linkedin-square nav-social"
                aria-hidden="true"
                
              ></i>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
