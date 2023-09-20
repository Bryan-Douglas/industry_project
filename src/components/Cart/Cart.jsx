import React from "react";
import SkinDrink from "../../assets/images/recommendations/skin_recommendations.png";
import UltraBland from "../../assets/images/recommendations/ultrabland_recommendations.png";
import PumpkinMask from "../../assets/images/recommendations/pumpkin_recommendations.png";
import BackArrow from "../../assets/images/backarrow.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Cart.scss";

function Cart() {
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart__header">
        <Link to="/recommendations">
          <img src={BackArrow} alt="Back to Recommendations" />
        </Link>
        <p className="cart__header__text">MY BAG (3)</p>
      </div>
      <div className="cart__container">
        <div className="cart__item">
          <img src={UltraBland} alt="Ultra Bland" />
          <p className="cart__item-size">200 ml</p>
          <div className="cart__item-details">
            <p className="cart__item-name">UltraBland</p>
            <p className="cart__item-category">Cleanser</p>
            <p className="cart__item-quantity">Qty: 1</p>
            <p className="cart__item-total">$23.00</p>
          </div>
        </div>

        <div className="cart__item">
          <img src={PumpkinMask} alt="Pumpkin Mask" />
          <p className="cart__item-size">200 ml</p>
          <div className="cart__item-details">
            <p className="cart__item-name">Mr Pumpkin Face</p>
            <p className="cart__item-category">Mask</p>
            <p className="cart__item-quantity">Qty: 1</p>
            <p className="cart__item-total">$14.50</p>
          </div>
        </div>

        <div className="cart__item">
          <img src={SkinDrink} alt="Skin Drink" />
          <p className="cart__item-size">200 ml</p>
          <div className="cart__item-details">
            <p className="cart__item-name">Skin Drink</p>
            <p className="cart__item-category">Moisturizer</p>
            <p className="cart__item-quantity">Qty: 1</p>
            <p className="cart__item-total">$14.50</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

