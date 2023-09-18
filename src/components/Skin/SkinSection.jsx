import React from "react";
import "./SkinSection.scss";
import BackArrow from "../../assets/images/backarrow.svg";
import { useNavigate } from "react-router-dom";
import CustomProgressBar from "../ProgessBar/ProgressBar";

function Skin() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className="skin-section">
      <h1 className="skin-section__header">
        How would you describe your skin?
      </h1>
      <div className="skin-section__cards-container">
      
      <div className="skin-section__card-container--top">
      <div onClick={goBack} className="skin-section__backArrow-wrapper">
          <img src={BackArrow} alt="" />
          <p className="skin-section__back">Back</p>
        </div>
      
        <div className="skin-section__card">
          <div className="skin-section__circle"></div>
          <p className="skin-section__subheader">Dry</p>
        </div>
        <div className="skin-section__card">
          <div className="skin-section__circle"></div>
          <p className="skin-section__subheader">Normal</p>
        </div>
        <div className="skin-section__card">
          <div className="skin-section__circle"></div>
          <p className="skin-section__subheader">Oily</p>
        </div>
      </div>
      <div className="skin-section__card-container--bottom">
        <div className="skin-section__card">
          <div className="skin-section__circle"></div>
          <p className="skin-section__subheader">Sensitive</p>
        </div>
        <div className="skin-section__card">
          <div className="skin-section__circle"></div>
          <p className="skin-section__subheader">Combination</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Skin;
