import React from "react";

const Input = (props) => {
  const { onChange, value } = props;
  return (
    <input
      value={value}
      onChange={onChange}
      type="text"
      placeholder="Add a ToDo"
      maxLength="50"
    />
  );
};

export default Input;
