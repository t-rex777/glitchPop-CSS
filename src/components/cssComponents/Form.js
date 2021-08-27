import React, { useState } from "react";
import App from "../../Base";

function Form() {
  
  const [input, setInput] = useState({
    username: "",
    password: "",
    repassword: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const submitBtn = (e) => {
    e.preventDefault();
  };
  return (
    <App header="Form" description="A simple form with validation included.">
      <div className="content-center mb-4">
        <form className="form-validation">
          <div className="validation-message"></div>
          <div className="row">
            <label htmlFor="text">UserName</label>
            <input
              type="text"
              name="username"
              value={input.username}
              onChange={handleChange}
              className="form-username input-field"
            />
            <br />
          </div>
          <div className="row">
            <label htmlFor="text">Password</label>
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              className="form-password input-field"
              
            />
            <br />
          </div>
          <div className="row">
            <label htmlFor="text">Re-enter Password</label>
            <input
              type="password"
              name="repassword"
              value={input.repassword}
              onChange={handleChange}
              className="form-rePassword input-field"
            />
            <br />
          </div>
          <button type="submit" className="form-btn " onClick={submitBtn}>
            Sumbit
          </button>
        </form>
      </div>
      <iframe
        title="form"
        src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=blackboard&wt=none&l=auto&ds=false&dsyoff=20px&dsblur=79px&wc=true&wa=true&pv=0px&ph=0px&ln=true&fl=1&fm=Fira+Code&fs=14.5px&lh=152%25&si=false&es=1x&wm=false&code=%2520%2509%2509%253Cform%2520class%253D%2522form-validation%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522validation-message%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522row%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522text%2522%253EUserName%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522text%2522%2520name%253D%2522username%2522%2520class%253D%2522form-username%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbr%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522row%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522text%2522%253EPassword%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522password%2522%2520name%253D%2522password%2522%2520class%253D%2522form-password%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbr%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522row%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522text%2522%253ERe-enter%2520Password%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522password%2522%2520name%253D%2522re-password%2522%2520class%253D%2522form-rePassword%2522%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbr%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520type%253D%2522submit%2522%2520class%253D%2522form-btn%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520add%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fform%253E"
        style={{
          width: "100%",
          height: "528px",
          border: "0",
          transform: "scale(1)",
          overflow: "hidden",
        }}
        sandbox="allow-scripts allow-same-origin"
      ></iframe>
    </App>
  );
}

export default Form;
