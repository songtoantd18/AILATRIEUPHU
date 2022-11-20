import React from "react";

const Button = (props) => {
  const { disabled, onChange, state, text, onClick, type } = props;
  return (
    <button
      className="btn-login"
      type={type}
      disabled={disabled}
      onChange={onChange}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
