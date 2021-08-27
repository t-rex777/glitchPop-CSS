import React from "react";
import App from "../../Base";
function Alert() {
  return (
    <App
      header="Alert"
      description="There are different types of alert boxes based on background colors."
    >
      <div className="mb-4">
        <div className="alert primary mb-2">
          <h3>Primary</h3>
        </div>
        <div className="alert secondary mb-2">
          <h3>Secondary</h3>
        </div>
        <div className="alert warning mb-2">
          <h3>warning</h3>
        </div>
        <div className="alert danger mb-2">
          <h3>danger</h3>
        </div>
        <div className="alert success mb-2">
          <h3>success</h3>
        </div>
        <div className="alert dark">
          <h3>dark</h3>
        </div>
      </div>
      <iframe
        title="alert"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cdiv%2520className%253D%2522alert%2520primary%2520mb-2%2522%253E%250A%2520%2520%253Ch3%253EPrimary%253C%252Fh3%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520secondary%2520mb-2%2522%253E%250A%2520%2520%253Ch3%253ESecondary%253C%252Fh3%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520warning%2520mb-2%2522%253E%250A%2520%2520%253Ch3%253Ewarning%253C%252Fh3%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520danger%2520mb-2%2522%253E%250A%2520%2520%253Ch3%253Edanger%253C%252Fh3%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520success%2520mb-2%2522%253E%250A%2520%2520%253Ch3%253Esuccess%253C%252Fh3%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520className%253D%2522alert%2520dark%2522%253E%250A%2520%2520%253Ch3%253Edark%253C%252Fh3%253E%250A%253C%252Fdiv%253E"
        style={{
          width: "100%",
          height: "463px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      
    </App>
  );
}

export default Alert;
