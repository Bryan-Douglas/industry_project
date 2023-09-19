import React from "react";
import { Link } from "react-router-dom";
import "./Detail.scss";
import DetailImage from "../../assets/images/details/overlay_detail_page.jpg";

function Detail() {
  return (
    <div className="detail">
      <div className="detail__image-container">
        <img
          src={DetailImage}
          alt="Someone is on their way to help"
          className="detail__image"
        />
      </div>
      <p className="help__text">Someone is on their way to help</p>
      <Link to="/welcome">
        <button className="back-to-routine-button">Back To Routine</button>
      </Link>
    </div>
  );
}

export default Detail;
