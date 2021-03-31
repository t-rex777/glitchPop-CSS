import React from "react";
import App from "./../../App";

function Navbar() {
  return (
    <App
      header="Navbar"
      description="A simple Navbar which can be use anywhere."
    >
      <div className="content-center mb-4">
        <nav className="nav dark text-white">
          <ul className="nav-items">
            <li className="nav-item">
              <a href="/" className="nav-logo">
                GlitchPop
              </a>
            </li>
            <li className="nav-item">home</li>
            <li className="nav-item">about</li>
            <li className="nav-item">dashboard</li>
            <li className="nav-item">shop</li>
            
          </ul>
        </nav>
      </div>
      <iframe
        title="navbar"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cnav%2520class%253D%2522nav%2520dark%2520text-white%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cul%2520class%253D%2522nav-items%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%2522nav-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%252F%2522%2520className%253D%2522nav-logo%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520GlitchPop%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522nav-item%2522%253Ehome%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522nav-item%2522%253Eabout%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522nav-item%2522%253Edashboard%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522nav-item%2522%253Eshop%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522nav-item%2522%253Econtact%2520us%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fnav%253E"
        style={{
          width: "100%",
          height: "377px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </App>
  );
}

export default Navbar;
