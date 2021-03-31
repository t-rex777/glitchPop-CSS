import React from "react";
import App from "./../../App";

function Image() {
  return (
    <App
      header="Image"
      description="You can use different types of image styles based on your purpose"
    >
      <div className="content-center">
        <img
          className="responsive mr-4 mb-4"
          src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
          alt=""
        />
        <img
          className=" round-img mb-4"
          src="https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg"
          alt=""
        />
      </div>
      <iframe
        title="image"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cimg%2520class%253D%2522responsive%2522%2520src%253D%2522%2522%2520alt%253D%2522%2522%2520%252F%253E%250A%253Cimg%2520class%253D%2522responsive%2520round-img%2522src%253D%2522%2522%2520alt%253D%2522%2522%2520%252F%253E"
        style={{
          width: "100%",
          height: "118px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
      ></iframe>
    </App>
  );
}

export default Image;
