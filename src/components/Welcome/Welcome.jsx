import React from 'react'
import Hair from '../../assets/images/haircare_welcome_back.png'
import Skincare from '../../assets/images/skincare_welcome_back.png'
import Bath from '../../assets/images/bath_welcome_back.png'

function Welcome() {
  return (
    <div className="welcome-section">
        <h1 className="welcome-section__header">Pick your category</h1>
        <div className="welcome-section__card-container">
            <div className="welcome-section__card">
            <div className="welcome-section__image-container">
                <img src={Hair} alt="woman washing hair" className="welcome-section__image" />
            </div>
            <div className="welcome-section__button-wrapper">
                <button className="welcome-section__button">
                    Haircare
                </button>
            </div>
            </div>
            <div className="welcome-section__card">
            <div className="welcome-section__image-container">
                <img src={Skincare} alt="woman with face mask" className="welcome-section__image" />
            </div>
            <div className="welcome-section__button-wrapper">
                <button className="welcome-section__button">
                    Skincare
                </button>
            </div>
            </div>
            <div className="welcome-section__card">
            <div className="welcome-section__image-container">
                <img src={Bath} alt="woman in bathtub" className="welcome-section__image" />
            </div>
            <div className="welcome-section__button-wrapper">
                <button className="welcome-section__button">
                    Bath
                </button>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Welcome