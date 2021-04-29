import React from "react";
import App from "../../App";
function Avatar() {
  return (
    <App
      header="Avatar"
      description="You can choose avatars with three different sizes, i.e. small, medium
    and large."
    >
      <div>
        <div className="content-center" style={{alignItems:"flex-end"}}>
          <img
            src="https://avatars0.githubusercontent.com/u/56619260?v=4"
            alt="avatar"
            className="avatar-s ml-4 mr-4"
          />
          <img
            src="https://avatars0.githubusercontent.com/u/56619260?v=4"
            alt="avatar"
            className="avatar-md mr-4"
          />
          <img src="https://avatars0.githubusercontent.com/u/56619260?v=4" alt="avatar" className="avatar-l" />
        </div>

        <iframe
          title="avatar"
          src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=56px&ph=29px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cimg%2520src%253D%2522%2522%2520alt%253D%2522avatar%2522%2520class%253D%2522avatar-s%2522%2520%252F%253E%250A%253Cimg%2520src%253D%2522%2522%2520alt%253D%2522avatar%2522%2520class%253D%2522avatar-md%2522%2520%252F%253E%250A%253Cimg%2520src%253D%2522%2522%2520alt%253D%2522avatar%2522%2520class%253D%2522avatar-l%2522%2520%252F%253E"
          style={{
            width: "100%",
            height: "251px",
            border: "0",
            transform: "scale(1)",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </App>
  );
}

export default Avatar;
