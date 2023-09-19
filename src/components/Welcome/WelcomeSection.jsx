import React, { useState } from "react";
import Hair from "../../assets/images/haircare_welcome_back.png";
import Skincare from "../../assets/images/skincare_welcome_back.png";
import Bath from "../../assets/images/bath_welcome_back.png";
import BackArrow from "../../assets/images/backarrow.svg";
import { useNavigate } from "react-router-dom";
import "./WelcomeSection.scss";
import { Link } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };



  return (
    <div className="welcome-section">
      <h1 className="welcome-section__header">Pick your category</h1>

      <div className="welcome-section__card-container">
        <div onClick={goBack} className="welcome-section__backArrow-wrapper">
          <img src={BackArrow} alt="" />
          <p className="welcome-section__back">Back</p>
        </div>

        <div className="welcome-section__card">
          <div className="welcome-section__image-container">
            <img
              src={Hair}
              alt="woman washing hair"
              className="welcome-section__image"
            />
          </div>
          <div className="welcome-section__button-wrapper">
            <button
              className="welcome-section__button" 
            >
              Haircare
            </button>
          </div>
        </div>
        <div className="welcome-section__card">
          <div className="welcome-section__image-container">
            <img
              src={Skincare}
              alt="woman with face mask"
              className="welcome-section__image"
            />
          </div>
          <Link to="/skin">
            <div className="welcome-section__button-wrapper">
              <button className="welcome-section__button">Skincare</button>
            </div>
          </Link>
        </div>
        <div className="welcome-section__card">
          <div className="welcome-section__image-container">
            <img
              src={Bath}
              alt="woman in bathtub"
              className="welcome-section__image"
            />
          </div>
          <div className="welcome-section__button-wrapper">
            <button
              className="welcome-section__button"
            >
              Bath
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;

