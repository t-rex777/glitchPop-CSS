import React, { useState } from "react";
import App from "./../../App";

function Toast() {
  const [toastStyle, setToastStyle] = useState({ display: "none" });
  return (
    <App
      header="Toast/Snackbar"
      description="You can use this toast for the purpose of small timed notification"
    >
      <div className="content-center">
        <button
          className="toast-btn btn-secondary mb-4"
          onClick={() => {
            setToastStyle({ display: "block" });
            setTimeout(() => {
              setToastStyle({ display: "none" });
            }, 3000);
          }}
        >
          Toast/SnackBar Button
        </button>
      </div>
      <div className="toast dark text-white" style={toastStyle}>
        <p className="toast-message ">Some toast message</p>
      </div>
      <iframe className="mt-4"
        title="toast"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cbutton%2520class%253D%2522toast-btn%2522%253EToast%252FSnackBar%2520Button%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522toast%2520dark%2520text-white%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522toast-message%2520%2522%253ESome%2520toast%2520message%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
        style={{
          width: "100%",
          height: "161px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </App>
  );
}

export default Toast;
