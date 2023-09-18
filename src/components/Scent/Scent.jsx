import React from 'react'
import Citrus from '../../assets/images/scents/citrusy_fav_scents.png';
import Earthy from '../../assets/images/scents/earthy_fav_scents.png';
import Floral from '../../assets/images/scents/floral_fav_scents.png';
import Herbal from '../../assets/images/scents/herbal_fav_scents.png';
import Minty from '../../assets/images/scents/minty_fav_scents.png';
import { Link } from 'react-router-dom';
import BackArrow from "../../assets/images/backarrow.svg";
import NextArrow from "../../assets/images/nextarrow.svg";
import { useNavigate } from 'react-router-dom';

function Scent() {
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
            <img src={Citrus} className="skin-section__image--radius"></img>
            <p className="skin-section__subheader">Citrusy</p>
          </div>
          <div className="skin-section__card">
            <img src={Earthy} className="skin-section__image--radius"></img>
            <p className="skin-section__subheader">Earthy</p>
          </div>
          <div className="skin-section__card">
            <img src={Floral} className="skin-section__image--radius"></img>
            <p className="skin-section__subheader">Floral</p>
          </div>
          <div className="skin-section__card">
            <img src={Herbal} className="skin-section__image--radius"></img>
            <p className="skin-section__subheader">Herbal</p>
          </div>
          <div className="skin-section__card">
            <img src={Minty} className="skin-section__image--radius"></img>
            <p className="skin-section__subheader">Minty</p>
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

export default Scent