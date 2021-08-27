import React from "react";
import App from "../../Base";
function Button() {
  return (
    <App
      header="Button"
      description="you can use different types of buttons based on background colours and float button."
    >
      <div className="content-center">
        <button className="btn-primary mr-2 mb-2">Primary</button>
        <button className="btn-secondary mr-2 mb-2">Secondary</button>
        <button className="btn-warning mr-2 mb-2">Warning</button>
        <button className="btn-danger mr-2 mb-2">Danger</button>
        <button className="btn-success mr-2 mb-2">Success</button>
        <button className="btn-dark mb-2">Dark</button>
        <button className="btn-float dark text-white">Float button</button>
      </div>
      <iframe
        title="button"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cbutton%2520class%253D%2522btn-primary%2522%253EPrimary%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn-secondary%2522%253ESecondary%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn-warning%2522%253EWarning%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn-danger%2522%253EDanger%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn-success%2522%253ESuccess%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn-dark%2522%253EDark%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn-float%2520dark%2520text-white%2522%253EFloat%253C%252Fbutton%253E"
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

export default Button;
