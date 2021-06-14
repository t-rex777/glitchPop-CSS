import React, { useState } from "react";
import SideNav from "./components/SideNav";
import "./App.css";
import Nav from "./components/Nav";
function Base({ children, header, description }) {
  const [activeMenu, setActiveMenu] = useState(false);
  const toggleMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="app">
      <Nav activeMenu={activeMenu} toggleMenu={toggleMenu} />
      <div className="app-page">
        <SideNav activeMenu={activeMenu} toggleMenu={toggleMenu} />
        <div className="main">
          {header && <h1 className="header">{header}</h1>}
          {description && (
            <p className="text-md m-4 text-center">{description}</p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}

export default Base;
