import React from "react";
import { Link } from "react-router-dom";
import "./Detail.scss";

function Detail() {
  return (
    <div className="detail">
      <img
        src="image" 
        alt="Someone is on their way to help"
        className="detail__image"
      />
      <p className="detail__text">Someone is on their way to help</p>
      <Link to="/welcome">
        <button className="back-to-routine-button">Back To Routine</button>
      </Link>
    </div>
  );
}

export default Detail;
