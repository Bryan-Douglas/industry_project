import React from "react";
import Almonds from "../../assets/images/recommendations/almonds_recommendations.png";
import Avocado from "../../assets/images/recommendations/avocado_recommendations.png";
import SheaButter from "../../assets/images/recommendations/butter_recommendations.png";
import Cinnamon from "../../assets/images/recommendations/cinnamon_recommendations.png";
import Honey from "../../assets/images/recommendations/honey_recommendations.png";
import PumpkinMask from "../../assets/images/recommendations/pumpkin_recommendations.png";
import Pumpkin from "../../assets/images/recommendations/pumpkin2_recommendations.png";
import Rose from "../../assets/images/recommendations/rose_recommendations.png";
import RedRose from "../../assets/images/recommendations/rose2_recommendations.png";
import SkinDrink from "../../assets/images/recommendations/skin_recommendations.png";
import UltraBland from "../../assets/images/recommendations/ultrabland_recommendations.png";
import Sunflower from "../../assets/images/recommendations/sunflower.png";
import BackArrow from "../../assets/images/backarrow.svg";
import NextArrow from "../../assets/images/nextarrow.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AddCart from "../../assets/images/add-to-cart.png";
import "./Recommendations.scss";
import Skin from "../Skin/SkinSection";
function Recommendations() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
    <div className="recommendations-sectionE">
    <div className="recommendations-section">
      <div onClick={goBack} className="skin-section__arrow-wrapper recommendations__arrow-wrapper">
        <img src={BackArrow} alt="back arrow" />
        <p className="skin-section__arrow-text">Back</p>
      </div>
      <div className="recommendations-section__container">
        <div className="recommendations-section__header-wrapper">
          <h1 className="recommendations-section__header">
            Your personal routine
          </h1>
          <p className="recommendations-section__text--light recommendations-section__text--lightUnderline">
            Take quiz again
          </p>
        </div>
        <div className="recommendations-section__card-container">
          <div className="recommendations-section__card">
            <div className="recommendations-section__card-top">
            <h2 className="recommendations-section__subheader">Step 1</h2>
            <img
              src={UltraBland}
              alt="Ultrabland cleanser"
              className="recommendations-section__main-image"
            />
            </div>
            <div className="recommendations-section__card-bottom">
            <div className="recommendations-section__productNameWrapper">
              <h3 className="recommendations-section__productName">
                Ultrabland
              </h3>
              <p className="recommendations-section__text--light">CLEANSER</p>
            </div>
            <div className="recommendations-section__briefDesc">
              <p className="recommendations-section__text">
                Ulta-gentle cream cleanser
              </p>
              <p className="recommendations-section__text recommendations-section__text--bold">
                from $23.00
              </p>
            </div>
            <div className="recommendations-section__images-section">
              <p className="recommendations-section_text">Why it works</p>
              <div className="recommendations-section__imageContainer">
                <div className="recommendations-section__imageWrapper">
                  <img
                    src={Rose}
                    alt="Pink rose"
                    className="recommendations-section__image"
                  />
                  <p className="recommendations-section__text--small recommendations-section__text--light">
                    Rose
                  </p>
                </div>
                <div className="recommendations-section__imageWrapper">
                  <img
                    src={Almonds}
                    alt="Almonds"
                    className="recommendations-section__image"
                  />
                  <p className="recommendations-section__text--small recommendations-section__text--light">
                    Almond
                  </p>
                </div>
                <div className="recommendations-section__imageWrapper">
                  <img
                    src={Honey}
                    alt="Honey"
                    className="recommendations-section__image"
                  />
                  <p className="recommendations-section__text--small recommendations-section__text--light">
                    Honey
                  </p>
                </div>
              </div>
            </div>
            <div className="recommendations-section__cartWrapper">
              <img
                src={AddCart}
                alt="add to cart"
                className="recommendations-section__addCart"
              />
            </div>
            </div>
          </div>
          <div className="recommendations-section__card">
          <div className="recommendations-section__card-top">
            <h2 className="recommendations-section__subheader">Step 2</h2>
            <img
              src={PumpkinMask}
              alt="Ultrabland cleanser"
              className="recommendations-section__main-image"
            />
            </div>
              <div className="recommendations-section__card-bottom">
            <div className="recommendations-section__productNameWrapper">
              <h3 className="recommendations-section__productName">
                MR Pumpkin Face
              </h3>
              <p className="recommendations-section__text--light">MASK</p>
            </div>
            <div className="recommendations-section__briefDesc">
              <p className="recommendations-section__text">
                Rich hydration for dry skin
              </p>
              <p className="recommendations-section__text recommendations-section__text--bold">
                from $14.50
              </p>
            </div>
            <div className="recommendations-section__images-section">
              <p className="recommendations-section_text">Why it works</p>
              <div className="recommendations-section__imageContainer">
                <div className="recommendations-section__imageWrapper">
                  <img
                    src={Cinnamon}
                    alt="cinnamon"
                    className="recommendations-section__image"
                  />
                  <p className="recommendations-section__text--small recommendations-section__text--light">
                    Cinnamon
                  </p>
                </div>
                <div className="recommendations-section__imageWrapper">
                  <img
                    src={Pumpkin}
                    alt="pumpkin"
                    className="recommendations-section__image"
                  />
                  <p className="recommendations-section__text--small recommendations-section__text--light">
                    Pumpkin
                  </p>
                </div>
                <div className="recommendations-section__imageWrapper">
                  <img
                    src={Sunflower}
                    alt="sunflower"
                    className="recommendations-section__image"
                  />
                  <p className="recommendations-section__text--small recommendations-section__text--light">
                    Sunflower
                  </p>
                </div>
              </div>
            </div>
            <div className="recommendations-section__cartWrapper">
              <img
                src={AddCart}
                alt="add to cart"
                className="recommendations-section__addCart"
              />
            </div>
            </div>
          </div>
          <div className="recommendations-section__card">
          <div className="recommendations-section__card-top">
            <h2 className="recommendations-section__subheader">Step 3</h2>
            <img
              src={SkinDrink}
              alt="Ultrabland cleanser"
              className="recommendations-section__main-image"
            />
            </div>
              <div className="recommendations-section__card-bottom">
            <div className="recommendations-section__productNameWrapper">
              <h3 className="recommendations-section__productName">
                Skin Drink
              </h3>
              <p className="recommendations-section__text--light">
                MOISTURIZER
              </p>
            </div>
            <div className="recommendations-section__briefDesc">
              <p className="recommendations-section__text">
                Rich hydration for dry skin
              </p>
              <p className="recommendations-section__text recommendations-section__text--bold">
                from $14.50
              </p>
            </div>
            <div className="recommendations-section__images-section">
              <p className="recommendations-section_text">Why it works</p>
              <div className="recommendations-section__imageContainer">
                <div className="recommendations-section__imageWrapper">
                  <img
                    src={Avocado}
                    alt="avocado"
                    className="recommendations-section__image"
                  />
                  <p className="recommendations-section__text--small recommendations-section__text--light">
                    Avocado
                  </p>
                </div>
                <div className="recommendations-section__imageWrapper">
                  <img
                    src={RedRose}
                    alt="red-rose"
                    className="recommendations-section__image"
                  />
                  <p className="recommendations-section__text--small recommendations-section__text--light">
                    Rose
                  </p>
                </div>
                <div className="recommendations-section__imageWrapper">
                  <img
                    src={SheaButter}
                    alt="Shea butter"
                    className="recommendations-section__image"
                  />
                  <p className="recommendations-section__text--small recommendations-section__text--light">
                    Shea
                  </p>
                </div>
                
              </div>
            </div>
            <div className="recommendations-section__cartWrapper">
              <img
                src={AddCart}
                alt="add to cart"
                className="recommendations-section__addCart"
              />
            </div>
            </div>
          </div>
        </div>
        
      </div>
      <Link to="/price">
        <div className="skin-section__arrow-wrapper recommendations__arrow-wrapper">
          <img src={NextArrow} alt="next arrow" />
          <p className="skin-section__arrow-text">Next</p>
        </div>
      </Link>
      
    </div>
    <div className="recommendations-section__button-wrapper">
        <button className="recommendations-section__button">Email me my routine</button>
      </div>
    </div>
    </>
  );
}

export default Recommendations;
