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

  const handleSubmit = (e) => {
    readyIntro.play();
    e.preventDefault();
    setTimeout(() => {
      props.onLogin(details);
    }, 3000);
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
