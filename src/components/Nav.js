import React from "react";
import logo from "../images/sharingan.png";
function Nav() {
  return (
    <div className="nav">
      <ul className="nav-items">
        <li className="nav-item">
          <a href="/" className="nav-logo">
            <img src={logo} alt="logo" className="logo"  />
            GlitchPop
          </a>
        </li>
        <ul className="nav-items">
          <li className="nav-item">
            <a href="https://github.com/t-rex777">
              <i
                className="fa fa-github nav-social"
                aria-hidden="true"
                style={{ fontSize: "3rem" }}
              ></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.linkedin.com/in/manish-kumar-sahu-b58a08131">
              <i
                className="fa fa-linkedin-square nav-social"
                aria-hidden="true"
                style={{ fontSize: "3rem" }}
              ></i>
            </a>
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Nav;
