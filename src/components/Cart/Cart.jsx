import React from "react";
import SkinDrink from "../../assets/images/recommendations/skin_recommendations.png";
import UltraBland from "../../assets/images/recommendations/ultrabland_recommendations.png";
import PumpkinMask from "../../assets/images/recommendations/pumpkin_recommendations.png";
import BackArrow from "../../assets/images/backarrow.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Pay from "../Pay/Pay";
import "./Cart.scss";
import { useState } from "react";
import GuestCheckout from "../GuestCheckout/GuestCheckout";

function Cart() {
  const [showGuestCheckout, setShowGuestCheckout] = useState(false);

  const handlePayNowClick = () => {
    setShowGuestCheckout(true);
  };
  const navigate = useNavigate();

  return (
    <div className="cart__flex">
    <div className="cart">
      <div className="cart__header">
        <Link to="/recommendations">
          <img src={BackArrow} alt="Back to Recommendations" />
        </Link>
        <p className="cart__arrow">Back</p>
        <p className="cart__header__text">MY BAG (3)</p>
      </div>
      <div className="cart__container">
        <div className="cart__item">
          <div className="cart__item-imageWrapper">
          <img src={UltraBland} alt="Ultra Bland" />
          <p className="cart__item-size">200 ml</p>
          </div>
          <div className="cart__item-details">
            <p className="cart__item-name">UltraBland</p>
           
            <p className="cart__item-category">CLEANSER</p>
            <p className="cart__item-quantity">Qty: 1</p>
            <p className="cart__item-total">$23.00</p>
          </div>
        </div>

        <div className="cart__item">
        <div className="cart__item-imageWrapper">
          <img src={PumpkinMask} alt="Pumpkin Mask" />
          <p className="cart__item-size">200 ml</p>
          </div>
          <div className="cart__item-details">
            <p className="cart__item-name">Mr Pumpkin Face</p>
            <p className="cart__item-category">MASK</p>
            <p className="cart__item-quantity">Qty: 1</p>
            <p className="cart__item-total">$14.50</p>
          </div>
        </div>

        <div className="cart__item">
        <div className="cart__item-imageWrapper">
          <img src={SkinDrink} alt="Skin Drink" />
          <p className="cart__item-size">200 ml</p>
          </div>
          <div className="cart__item-details">
            <p className="cart__item-name">Skin Drink</p>
            <p className="cart__item-category">MOISTURIZER</p>
            <p className="cart__item-quantity">Qty: 1</p>
            <p className="cart__item-total">$14.50</p>
          </div>
          <div className="cart__footer">
        <div className="cart__totals">
          <div className="cart__total-item">
            <p className="cart__total-sub">Subtotal</p>
            <p className="cart__total-tax">Tax</p>
            <p className="cart__total-price">Total</p>
          </div>
          <div className="cart__total-item">
            <p className="cart__total-sub">$82.50</p>
            <p className="cart__total-tax1">$8.30</p>
            <p className="cart__total-price">$90.80</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  
    </div>
    {showGuestCheckout ? (
        <GuestCheckout />
      ) : (
    <Pay onPayNowClick={handlePayNowClick} />
    )}
    </div>
  );
}

export default Cart;

