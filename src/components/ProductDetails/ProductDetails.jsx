import React from 'react'
import './ProductDetails.scss'
import BackArrow from "../../assets/images/backarrow.svg";
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    };
  return (
    <div className="productDetails-section">
          <div onClick={goBack} className="skin-section__arrow-wrapper recommendations__arrow-wrapper">
        <img src={BackArrow} alt="back arrow" />
        <p className="skin-section__arrow-text">Back</p>
      </div>
        
    </div>
  )
}

export default ProductDetails