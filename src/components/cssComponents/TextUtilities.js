import React from "react";
import App from "../../Base";

function TextUtilities() {
  return (
    <App
      header="Text Utilities"
      description="You can use these text utlities according to your purposes"
    >
      <div
        className="content-center mb-4 text-utilities"
        style={{
          
        }}
      >
        <div className="text-xl uti">Extra Large Text</div>
        <div className="text-l  uti">Large Text</div>
        <div className="text-md uti">Medium Text</div>
        <div className="text-s uti">Small Text</div>
        <div className="text-xs uti">Extra Small Text</div>
        <div className="text-gray text-md uti">Gray Text</div>
        <div className="text-center text-md uti">Center Text</div>
      </div>
      <iframe
        title="text utilities"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cdiv%2520class%253D%2522text-xl%2522%253EExtra%2520Large%2520Text%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522text-l%2522%253ELarge%2520Text%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522text-md%2522%253EMedium%2520Text%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522text-s%2522%253ESmall%2520Text%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522text-xs%2522%253EExtra%2520Small%2520Text%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522text-gray%2522%253EGray%2520Text%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522text-center%2522%253ECenter%2520Text%253C%252Fdiv%253E"
        style={{
          width: "100%",
          height: "226px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </App>
  );
}

export default TextUtilities;
