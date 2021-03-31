import React from "react";
import App from "./../../App";

function SimplifiedGrid() {
  const divStyling = {
    height: "100px",
    width:"400px"
  };

  return (
    <App
      header="Simplified Grid"
      description="You can use this grid structure according to your purpose"
    >
      <div
        className=""
        style={{ width: "50rem", margin: "4rem auto" }}
      >
      
        <div className="grid mb-4">
          <div style={divStyling} className="secondary text-white">
            <h1>DIV-1</h1>
          </div>
          <div style={divStyling} className="primary text-white">
            <h1>DIV-2</h1>
          </div>
        </div>

        <div className="grid">
          <div style={divStyling} className="warning text-white">
            <h1>DIV-1</h1>
          </div>
          <div style={divStyling} className="danger text-white">
            <h1>DIV-2</h1>
          </div>
          <div style={divStyling} className="success text-white">
            <h1>DIV-3</h1>
          </div>
        </div>
      </div>

      <iframe
        title="grid"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Ch2%253EClass%2520%253A%2520grid-2%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid-2%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522secondary%2520text-white%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EDIV-1%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522primary%2520text-white%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EDIV-2%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch2%253EClass%2520%253A%2520grid-3%253C%252Fh2%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid-3%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522warning%2520text-white%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EDIV-1%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522danger%2520text-white%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EDIV-2%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522success%2520text-white%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EDIV-3%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E"
        style={{
          width: "100%",
          height: "300px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </App>
  );
}

export default SimplifiedGrid;
