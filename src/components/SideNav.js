import React from "react";
import logo from "../images/sharingan.png";

function SideNav({ activeMenu, toggleMenu }) {
  return (
    <div
      // style={{ height: "1000px" }}
      className={activeMenu ? "sideNav active" : "sideNav"}
    >
      <div>
        <ul className="sideNav-items">
          <li className="sideNav-item">
            <a href="/">Getting Started</a>
          </li>
          <li className="sideNav-item">
            <a href="/avatar">Avatar</a>
          </li>
          <li className="sideNav-item">
            <a href="/alert">Alert</a>
          </li>
          <li className="sideNav-item">
            <a href="/badge">Badge</a>
          </li>
          <li className="sideNav-item">
            <a href="/button">Button</a>
          </li>
          <li className="sideNav-item">
            <a href="/card">Card</a>
          </li>
          <li className="sideNav-item">
            <a href="/image">Image</a>
          </li>
          <li className="sideNav-item">
            <a href="/form">Form</a>
          </li>
          <li className="sideNav-item">
            <a href="/list">List</a>
          </li>
          <li className="sideNav-item">
            <a href="/modal">Modal</a>
          </li>
          <li className="sideNav-item">
            <a href="/navbar">Navigation</a>
          </li>
          <li className="sideNav-item">
            <a href="/rating">Rating</a>
          </li>
          <li className="sideNav-item">
            <a href="/slider">Slider</a>
          </li>
          {/* TODO: make it responsive */}
          {/* <li className="sideNav-item">
            <a href="/simplifiedgrid">Simplified Grid</a>
          </li> */}
          <li className="sideNav-item">
            <a href="/textutilities">Text Utilities</a>
          </li>
          <li className="sideNav-item">
            <a href="/toast">Toast/Snackbar</a>
          </li>

         
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
