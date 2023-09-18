import React from "react";
import "./SkinSection.scss";
import BackArrow from "../../assets/images/backarrow.svg";
import { useNavigate } from "react-router-dom";
import NormalSkin from '../../assets/images/skin-type/normal_skin-type.png';
import SensitiveSkin from '../../assets/images/skin-type/sensitive_skin-type.png';
import DrySkin from '../../assets/images/skin-type/dry_skin-type.png';
import NextArrow from "../../assets/images/nextarrow.svg";
import OilySkin from '../../assets/images/skin-type/oily_skin-type.png';
import ComboSkin from '../../assets/images/skin-type/combination_skin-type.png';

import { Link } from "react-router-dom";


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
      <div onClick={goBack} className="skin-section__arrow-wrapper">
          <img src={BackArrow} alt="back arrow" />
          <p className="skin-section__arrow-text">Back</p>
        </div>
      
        <div className="skin-section__card">
          <img src={DrySkin} className="skin-section__image"></img>
          {/* <p className="skin-section__subheader">Dry</p> */}
        </div>
        <div className="skin-section__card">
        <img src={NormalSkin} className="skin-section__image"></img>
          {/* <p className="skin-section__subheader">Normal</p> */}
        </div>
        <div className="skin-section__card">
        <img src={OilySkin} className="skin-section__image"></img>
          {/* <p className="skin-section__subheader">Oily</p> */}
        </div>
        <Link to="/skin-needs">
        <div  className="skin-section__arrow-wrapper">
          <img src={NextArrow} alt="next arrow" />
          <p className="skin-section__arrow-text">Next</p>
        </div>
        </Link>
      </div>
      <div className="skin-section__card-container--bottom">
        <div className="skin-section__card">
        <img src={SensitiveSkin} className="skin-section__image"></img>
          {/* <p className="skin-section__subheader">Sensitive</p> */}
        </div>
        <div className="skin-section__card">
        <img src={DrySkin} className="skin-section__image"></img>
          {/* <p className="skin-section__subheader">Combination</p> */}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Skin;



