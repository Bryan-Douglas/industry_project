import React from 'react';
import './ProductDetails.scss';
import BackArrow from "../../assets/images/backarrow.svg";
import TryMe from '../../assets/images/tryme.png';
import Ultrabland from '../../assets/images/ultrabland.png';
import RoseWater from '../../assets/images/rosewater.png';
import AlmondOil from '../../assets/images/almondoil.png';
import Honey from '../../assets/images/honey.png';
import { useNavigate } from 'react-router-dom';

function ProductDetails() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <section className="productDetails-section">
        <div onClick={goBack} className=" productDetails-section__arrow-wrapper">
          <img src={BackArrow} alt="back arrow" className="productDetails-section__back-arrow" />
          <p className="productDetails-section__arrow-text">Back</p>
        </div>
      </section>
      <section className='productDetails-container'>
        <div className='productDetails-wrapper'>
          <div className='productDetails-title__wrapper'>
            <h1 className='productDetails-title'>ULTRABLAND</h1>
            <h2 className='productDetails-subtitle'>FACE CLEANSER</h2>
          </div>
          <img className='productDetails-tryMe' src={TryMe} alt='try me!' />
        </div>
        <article className='productDetails-article__container'>
          <div className='productDetails-article__wrapper'>
            <p className='productDetails-article'>Remove makeup and dirt while leaving skin feeling fresh,
              dewy and calm with this rich cream cleanser that's been a cult favorite for years.</p>
            <p className='productDetails-article__title'>Benefits:</p>
            <ul>
              <li>Honey draws moisture into the skin</li>
              <li>Almond oil softens and nourishes</li>
              <li>Rose water calms and soothes</li>
            </ul>
          </div>
          <img className='productDetails-article__image' src={Ultrabland} alt='ultrabrand face cleanser'></img>
        </article>
        <section className='productDetails-ingredients__container'>
            <div className='productDetails-ingredients__titlesWrapper'>
              <h3 className='productDetails-ingredients__titles'>WHY IT WORKS</h3>
              <h3 className='productDetails-ingredients__titles'>HOW TO USE</h3>
              <h3 className='productDetails-ingredients__titles'>ALL INGREDIENTS</h3>
            </div>
            <div className='productDetails-ingredients__ingredientsWrapper'>
              <div className='productDetails-ingredient__container'>
                <img className='productDetails-ingredient__image' src={RoseWater} alt='Rose Water' />
                <h4 className='productDetails-ingredient__title'>ROSE WATER</h4>
                <p className='productDetails-ingredient__description'>Calming</p>
              </div>
              <div className='productDetails-ingredient__container'>
                <img className='productDetails-ingredient__image' src={AlmondOil} alt='Rose Water' />
                <h4 className='productDetails-ingredient__title'>ALMOND OIL</h4>
                <p className='productDetails-ingredient__description'>Nourishing</p>
              </div>
              <div className='productDetails-ingredient__container'>
                <img className='productDetails-ingredient__image' src={Honey} alt='Rose Water' />
                <h4 className='productDetails-ingredient__title'>HONEY</h4>
                <p className='productDetails-ingredient__description'>Moisturizing</p>
              </div>
            </div>
            <button className='productDetails-button' type='submit'>ADD TO CART</button>
        </section>
      </section>
    </>
  )
}

export default ProductDetails