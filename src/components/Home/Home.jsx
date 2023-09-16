import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-section">
      <div className="home-section__headerWrapper">
        <h1 className="home-section__header">LUSH GUIDE</h1>
      </div>
      <div className="home-section__subheaderWrapper">
        <h2 className="home-section__subheader">
          Discover your personalized beauty routine
        </h2>
      </div>
      <div className="home-section__textWrapper">
        <p className="home-section__text">
          Our products are made by hand with freshly squeezed fruit juices,
          herbal infusions, essential oil blends and rich, nourishing butters.
          Find your personalized routine today.
        </p>
      </div>
      <div className="home-section__buttonWrapper">
        <Link to="/welcome">
        <button className="home-section__button">START</button>
        </Link>
      </div>
      <p className="home-section__text home-section__text--underline ">Existing routine</p>
    </div>
  );
}

export default Home;
