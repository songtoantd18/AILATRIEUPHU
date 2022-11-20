import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

const Login1 = () => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleBtn = () => {};
  return (
    <div className="App">
      <div className="container">
        <Input value={text} onChange={handleChange} />
        <Button disabled={!text} onChange={() => handleBtn()} text="Add" />
        {/* <Button onChange={() => handleBtn()} text="Clean" /> */}
      </div>
    </div>
  );
};

export default Login1;
