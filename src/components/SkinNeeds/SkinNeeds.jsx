import React from 'react'
import './SkinNeeds.scss';
import BackArrow from "../../assets/images/backarrow.svg";
import { useNavigate } from "react-router-dom";
import Acne from '../../assets/images/skin-concerns/acne_concerns.png';
import Dry from '../../assets/images/skin-concerns/dry_skin_concerns.png';
import Dull from '../../assets/images/skin-concerns/dull_skin_concerns.png';
import Sensitive from '../../assets/images/skin-concerns/sensitivity_concerns.png';
import Texture from '../../assets/images/skin-concerns/texture_concerns.png';
import { Link } from 'react-router-dom';

import NextArrow from "../../assets/images/nextarrow.svg";

function SkinNeeds() {
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    };
  return (
    <div className="skin-section">
    <div onClick={goBack} className="skin-section__arrow-wrapper">
      <img src={BackArrow} alt="back arrow" />
      <p className="skin-section__arrow-text">Back</p>
    </div>
    <div className="skin-section__content-wrapper">
      <h1 className="skin-section__header">
       What are your skin needs?
       <p className="skin-section__subtitle">Choose 2 or more</p>
      </h1>
      <div className="skin-section__cards-container__needs">
        
          <div className="skin-section__card">
            <img src={Acne} className="skin-section__image--radius"></img>
            <p className="skin-section__subheader">Acne</p>
          </div>
          <div className="skin-section__card">
            <img src={Sensitive} className="skin-section__image--radius"></img>
            <p className="skin-section__subheader">Sensitivity</p>
          </div>
          <div className="skin-section__card">
            <img src={Dry} className="skin-section__image--radius"></img>
            <p className="skin-section__subheader">Dryness</p>
          </div>
          <div className="skin-section__card">
            <img src={Dull} className="skin-section__image--radius"></img>
            <p className="skin-section__subheader">Dullness</p>
          </div>
          <div className="skin-section__card">
            <img src={Texture} className="skin-section__image--radius"></img>
            <p className="skin-section__subheader">Texture</p>
          </div>
        
      </div>
    </div>
    <Link to="/scent">
      <div className="skin-section__arrow-wrapper">
        <img src={NextArrow} alt="next arrow" />
        <p className="skin-section__arrow-text">Next</p>
      </div>
    </Link>
  </div>
  )
}

export default SkinNeeds