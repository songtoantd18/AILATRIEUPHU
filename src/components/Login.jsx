import React, { useState } from "react";
import Button from "./Button";
import { validEmail, validPassword } from "../constant/Regex";
import ready from "../audio/ready.mp3";
// import { RandomQuestion } from "../constant/RandomQuestion";
// import { questionsBase } from "../constant/RandomQuestion";

const Login = (props) => {
  const readyIntro = new Audio(ready);

  const [text, setText] = useState("");
  const handleBtn = () => {};

  const [details, setDetails] = useState({
    name: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setText(e.target.value);
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    readyIntro.play();
    e.preventDefault();
    setTimeout(() => {
      // RandomQuestion(questionsBase);
      props.onLogin(details);
    }, 3000);
  };
  return (
    <div className="containerLogin">
      <div className="login">
        who want to be milionaire
        <h3>what's your name : </h3>
        <form>
          <div className="FormLogin">
            <input
              className="input"
              type="text"
              name="name"
              onChange={handleChange}
            />
            <Button
              disabled={text.length < 3 || text.length > 19}
              onChange={() => handleBtn()}
              text="Ready"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
