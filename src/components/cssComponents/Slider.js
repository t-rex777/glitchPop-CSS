import React from "react";
import App from "./../../App";

function Slider() {
  return (
    <App
      header="Slider"
      description="You can use this simple slider for common purposes."
    >
      <div className="content-center mb-4">
        <input
          className="slider"
          type="range"
          min="1"
          max="100"
          style={{ width: "30rem" }}
        />
      </div>
      <iframe
        title="Slider"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cinput%2520class%253D%2522slider%2522%2520type%253D%2522range%2522%2520min%253D%25221%2522%2520max%253D%2522100%2522%2520value%253D%252250%252F%253E"
        style={{
          width: "100%",
          height: "96px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </App>
  );
}

export default Slider;
