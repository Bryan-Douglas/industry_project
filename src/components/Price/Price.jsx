import React from "react";
import "./Price.scss";
import BackArrow from "../../assets/images/backarrow.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Price() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
            <p className="page-number">5/5</p>
    <div className="price-section">
      <div onClick={goBack} className="skin-section__arrow-wrapper price-section__arrow-wrapper">
        <img src={BackArrow} alt="back arrow" />
        <p className="skin-section__arrow-text">Back</p>
      </div>
      <div className="price-section__content-wrapper">
        <h1 className="price-section__header">Price point?</h1>

        <div className="price-section__wrapper">
          <ul className="price-section__list-container">
            <li className="price-section__list-item">$5-10</li>
            <Link to="/results">
              <li className="price-section__list-item">$10-25</li>
            </Link>
            <li className="price-section__list-item">$25-50</li>
            <li className="price-section__list-item">$50-100</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Price;
