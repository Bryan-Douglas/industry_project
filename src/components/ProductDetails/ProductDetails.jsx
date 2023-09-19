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
          <div onClick={goBack} className=" productDetails-section__arrow-wrapper">
        <img src={BackArrow} alt="back arrow" className="productDetails-section__back-arrow" />
        <p className="productDetails-section__arrow-text">Back</p>
      </div>
        
    </div>
  )
}

export default ProductDetails