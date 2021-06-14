import React from "react";
import App from "../Base";

function Home() {
  return (
    <App>
      <div className="home mb-4">
        <h1>
          Build fascinating, responsive websites with Glitch<span>Pop</span> CSS
        </h1>
        <p>
          A small light-weight CSS component library which can be used for
          making projects faster with ease.
        </p>
        <a href="../library/styles.css">
          <button>Download CSS</button>
        </a>
        <a
          href="../library/app.js"
          download
        >
          <button>Download JS file</button>
        </a>
        <div>
          <h1>Installation</h1>
          <p>
            You can either download the css and javascript files or you can just
            copy the links and include it on your HTML file.
          </p>
        </div>
      </div>
      <h3 className="text-center">CSS FILE</h3>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%252F%252FYou%2520can%2520Import%2520it%2520directly%2520to%2520CSS%2520file%250A%2540import%2520url%28%2522https%253A%252F%252Fglitchpop-css.herokuapp.com%252Flibrary%252Fstyles.css%2522%29%253B%250A%250A%252F%252FYou%2520can%2520also%2520import%2520it%2520just%2520before%2520%253C%252Fhead%253E%250A%253Clink%2520rel%253D%2522stylesheet%2522%2520href%253D%2522https%253A%252F%252Fglitchpop-css.herokuapp.com%252Flibrary%252Fstyles.css%2522%253E"
        title="CSS file"
        style={{
          width: "100%",
          height: "182px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
      <h3 className="text-center mt-4">JAVASCRIPT FILE</h3>
      <iframe
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%252F%252FYou%2520can%2520import%2520it%2520just%2520before%2520%253C%252Fbody%253E%250A%253Cscript%2520src%253D%2522https%253A%252F%252Fglitchpop-css.herokuapp.com%252Flibrary%252Fapp.js%2522%253E%253C%252Fscript%253E"
        title="JS file"
        style={{
          width: "100%",
          height: "118px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </App>
  );
}

export default Home;
