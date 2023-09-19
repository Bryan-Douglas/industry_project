import React from "react";
import "./SkinSection.scss";
import BackArrow from "../../assets/images/backarrow.svg";
import { useNavigate } from "react-router-dom";
import NormalSkin from "../../assets/images/skin-type/normal_skin-type.png";
import SensitiveSkin from "../../assets/images/skin-type/sensitive_skin-type.png";
import DrySkin from "../../assets/images/skin-type/dry_skin-type.png";
import NextArrow from "../../assets/images/nextarrow.svg";
import OilySkin from "../../assets/images/skin-type/oily_skin-type.png";
import ComboSkin from "../../assets/images/skin-type/combination_skin-type.png";
<<<<<<< HEAD
import { Link } from "react-router-dom";
import CustomProgressBar from "../ProgessBar/ProgressBar";
=======

import { Link } from "react-router-dom";
>>>>>>> 72c1cab8ee6de6918260a2fabbe6f2291675855e

function Skin() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const goBack = () => {
    navigate(-1);
  };

  const handleOptionSelect = () => {
    if (progress < 100) {
      setProgress(progress + 20);
    }
  };

  return (
    <div className="skin-section">
<<<<<<< HEAD
      <CustomProgressBar stepPercentage={progress} />
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
            <div
              className="skin-section__circle"
            ></div>
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
=======
      <div onClick={goBack} className="skin-section__arrow-wrapper">
        <img src={BackArrow} alt="back arrow" />
        <p className="skin-section__arrow-text">Back</p>
      </div>
      <div className="skin-section__content-wrapper">
        <h1 className="skin-section__header">
          How would you describe your skin?
        </h1>
        <div className="skin-section__cards-container">
          
            <div className="skin-section__card">
              <img src={DrySkin} className="skin-section__image"></img>
            </div>
            <div className="skin-section__card">
              <img src={NormalSkin} className="skin-section__image"></img>
            </div>
            <div className="skin-section__card">
              <img src={OilySkin} className="skin-section__image"></img>
            </div>
            <div className="skin-section__card">
              <img src={SensitiveSkin} className="skin-section__image"></img>
            </div>
            <div className="skin-section__card">
              <img src={DrySkin} className="skin-section__image"></img>
            </div>
          
        </div>
      </div>
      <Link to="/skin-needs">
        <div className="skin-section__arrow-wrapper">
          <img src={NextArrow} alt="next arrow" />
          <p className="skin-section__arrow-text">Next</p>
        </div>
      </Link>
>>>>>>> 72c1cab8ee6de6918260a2fabbe6f2291675855e
    </div>
  );
}

export default Skin;
