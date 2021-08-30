import React, { useEffect, useState } from "react";
import App from "../../Base";

function Modal() {
  const [modalStyle, setModalStyle] = useState({ display: "none" });
  const modalClick = (e) => {
    e.preventDefault();
    setModalStyle({ display: "block" });
  };
  const cancelModal = (e) => {
    e.preventDefault();
    setModalStyle({ display: "none" });
  };
  useEffect(() => {
    window.onclick = (e) => {
      if (e.target.className === "modal-active") {
        setModalStyle({ display: "none" });
      }
    };
  });

  return (
    <App header="Modal" description="A simple modal which can be use anywhere!">
      <div className="content-center mb-4">
        <button className="btn btn-warning modal-btn" onClick={modalClick}>
          Click here to open Modal
        </button>
        <div className="modal-active" style={modalStyle}>
          <div className="modal-contents">
            <span className="modal-close" onClick={cancelModal}>
              &times;
            </span>
            <h1 className="mt-3">Your Modal</h1>
            <p className="text-s m-2">Your texts here</p>
            <button className="btn btn-primary m-2">Reset</button>
            <button className="btn btn-secondary m-2">Submit</button>
          </div>
        </div>
      </div>
      <iframe
        title="Modal"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cdiv%2520class%253D%2522modal-active%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-contents%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522modal-close%2522%253E%2526times%253B%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%253EYour%2520Modal%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EYour%2520texts%2520here%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-primary%2522%253EReset%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-secondary%2522%253ESubmit%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
        style={{
          width: "100%",
          height: "269px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </App>
  );
}

export default Modal;
