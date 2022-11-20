import React, { useState } from "react";
import Button from "./Button";

const Login = (props) => {
  const [text, setText] = useState("");
  const handleBtn = () => {};

  // console.log("props:", props);
  const [details, setDetails] = useState({
    name: "song toan",
    // age: "20",
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
    e.preventDefault();
    console.log("onLogin:before", props);
    props.onLogin("song toan 123");
    console.log("onLogin:after");

    // setIsLogin(true);
  };
  return (
    <div className="login">
      who want to be milionaire
      <form>
        <h3>what's your name : </h3>
        <input type="text" name="name" onChange={handleChange} />

        {/* <button type="submit" onClick={handleSubmit}>
          submit
        </button> */}
        <Button
          disabled={!text}
          onChange={() => handleBtn()}
          text="Add"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Login;
