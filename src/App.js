import React from "react";
import SideNav from "./components/SideNav";
import "./App.css";
import Nav from "./components/Nav";
function App({ children, header, description }) {
  return (
    <div className="grid-template">
      <Nav />
      <SideNav />
      <div className="main">
        <h1 className="header">{header}</h1>
        <p className="text-md m-4 text-center">{description}</p>
        {children}
      </div>
    </div>
  );
}

export default App;
