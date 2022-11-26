import React, { useState } from "react";
import Button from "./Button";
import { validEmail, validPassword } from "../constant/Regex";
import ready from "../audio/ready.mp3";

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

  /////////////
  // function sayHello() {
  //   const handleSubmit = (e) => {
  //     console.log("1:", 1);
  //     readyIntro.play();
  //     e.preventDefault();
  //     props.onLogin(details);
  //   };
  // }
  // setTimeout(sayHello, 1000);
  const handleSubmit = (e) => {
    readyIntro.play();
    e.preventDefault();
    props.onLogin(details);
  };
  return (
    <div className="login">
      who want to be milionaire
      <form>
        <h3>what's your name : </h3>
        <input type="text" name="name" onChange={handleChange} />

        <Button
          disabled={text.length < 3 || text.length > 19}
          onChange={() => handleBtn()}
          text="Ready"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Login;
