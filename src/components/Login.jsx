import React, { useState } from "react";
import Button from "./Button";
import { validEmail, validPassword } from "../constant/Regex";

const Login = (props) => {
  const [text, setText] = useState("");
  const handleBtn = () => {};

  // console.log("props:", props);
  const [details, setDetails] = useState({
    name: "",
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

    // console.log("onLogin:before", props);
    // console.log("onLogin:after");
    setDetails();
    props.onLogin(details);
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
          disabled={text.length < 3 || text.length > 19}
          onChange={() => handleBtn()}
          text="Add"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Login;
