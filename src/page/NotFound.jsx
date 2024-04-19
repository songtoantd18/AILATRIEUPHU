import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <div className="error-container">
      <h1>404 </h1>
      <p className="zoom-area">
        <b>CSS</b> animations to make a cool 404 page.{" "}
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="link-container">
        Visit the original article
        <p>
          Go back to <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
