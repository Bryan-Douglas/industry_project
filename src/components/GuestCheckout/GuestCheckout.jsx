import React from "react";
import { Link } from "react-router-dom";
import "./GuestCheckout.scss";
import Payment from '../../assets/images/payment.png';


function GuestCheckout() {
    return (
        <>
            <section className='checkout-container'>
                <h1 className='checkout-title'>Guest Checkout</h1>
                <div className='checkout-subscribe__wrapper'>
                    <input className='checkout-checkbox' type='radio'></input>
                    <div className='checkout-title__wrapper'>
                        <h2 className='checkout-subtitle'>Subscribe to your routine</h2>
                        <p className='checkout-text'>Get your favourites shipped right to your door every month</p>
                    </div>
                </div>
                <button className='checkout-button'><a href='mailto:'>SUBSCRIBE</a></button>
                <div className="flex-left">
                <h1 className='checkout-title checkout-title--left'>Payment</h1>
                <h2 className='checkout-subtitle'>We accept</h2>
                </div>
                <img className='checkout-payments' src={Payment} alt='payment methods' />
                <Link to='/thankyou'>
                <button className='checkout-button'>PROCESS PAYMENT</button>
                </Link>
            </section>
        </>
    );
}

export default GuestCheckout;