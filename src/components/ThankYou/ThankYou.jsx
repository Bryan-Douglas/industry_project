import React from 'react'
import './ThankYou.scss'
import { Link } from 'react-router-dom'

function ThankYou() {

  return (
    <div className="thanks-section">
        <h1 className="thanks-section__header">Congratulations!</h1>
        <p className="thanks-section__text">Thank you for shopping with us.</p>
        <p className="thanks-section__text">Please proceed to pick up your products at the counter</p>
        <div className="thanks-section__buttonWrapper">
        <Link to="/welcome">
            <button className="thanks-section__button">Exit</button>
            </Link>
        </div>
    </div>
  )
}

export default ThankYou