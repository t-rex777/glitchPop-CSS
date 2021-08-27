import React from "react";
import App from "../../Base";

function Badge() {
  return (
    <App
      header="Badges"
      description="You can use different badges based on their sizes and purpose."
      codeSnippet=""
    >
      <div style={{ margin: "0 auto" }}>
        <div className="mb-4 text-center">
          <span
            className="badge-box-s success  m-1"
            style={{ padding: "0.25rem 0.5rem" }}
          >
            99
          </span>
          <span
            className="badge-box-md success m-1 "
            style={{ padding: "0.45rem 1rem" }}
          >
            99
          </span>
          <span
            className="badge-box-l success m-1"
            style={{ padding: "0.75rem 2rem" }}
          >
            99
          </span>
        </div>
        <div className="text-center">
          <span
            className="badge-circle-s warning m-1"
            style={{ borderRadius: "50%", padding: "0.25rem 0.5rem" }}
          >
            10
          </span>
          <span
            className="badge-circle-md warning m-1 "
            style={{ borderRadius: "50%", padding: "0.45rem 1rem" }}
          >
            10
          </span>
          <span
            className="badge-circle-l warning m-1"
            style={{ borderRadius: "50%", padding: "0.75rem 2rem" }}
          >
            10
          </span>
        </div>
      </div>
      <iframe
        className="mt-4"
        title="badge"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%253Cspan%2520className%253D%2522badge-box-s%2520%2522%253E99%253C%252Fspan%253E%250A%253Cspan%2520className%253D%2522badge-box-md%2520%2522%253E99%253C%252Fspan%253E%250A%253Cspan%2520className%253D%2522badge-box-l%2522%253E99%253C%252Fspan%253E%250A%253Cspan%2520className%253D%2522badge-circle-s%2522%253E10%253C%252Fspan%253E%250A%253Cspan%2520className%253D%2522badge-circle-md%2522%253E10%253C%252Fspan%253E%250A%253Cspan%2520className%253D%2522badge-circle-l%2522%253E10%253C%252Fspan%253E"
        style={{
          width: "100%",
          height: "204px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </App>
  );
}

export default Badge;
