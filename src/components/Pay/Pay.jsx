import React from "react";
import { Link } from "react-router-dom";
import "./Pay.scss";


function Pay({onPayNowClick}) {
  return (
    
    <section className='pay-container'>
        <h1 className='pay-title'>How would you like to pay?</h1>
        <button className='pay-button'>AT THE COUNTER</button>
        <Link to='/cart'>
        <button className='pay-button' onClick={onPayNowClick}>PAY NOW</button>
        </Link>
        <Link to='/home'>
        <p className='pay-restart'>Take quiz again</p>
        </Link>
        <p className='pay-text'>Cancel</p>
    </section>
  
  );
}

export default Pay;
