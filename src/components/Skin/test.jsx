<div className="skin-section">
<div onClick={goBack} className="skin-section__arrow-wrapper">
   <img src={BackArrow} alt="back arrow" />
   <p className="skin-section__arrow-text">Back</p>
 </div>
<div className="skin-section__content-wrapper">
<h1 className="skin-section__header">
 How would you describe your skin?
</h1>
<div className="skin-section__cards-container">

<div className="skin-section__card-container--top">


 <div className="skin-section__card">
   <img src={DrySkin} className="skin-section__image"></img>
   {/* <p className="skin-section__subheader">Dry</p> */}
 </div>
 <div className="skin-section__card">
 <img src={NormalSkin} className="skin-section__image"></img>
   {/* <p className="skin-section__subheader">Normal</p> */}
 </div>
 <div className="skin-section__card">
 <img src={OilySkin} className="skin-section__image"></img>
   {/* <p className="skin-section__subheader">Oily</p> */}
 </div>

</div>
<div className="skin-section__card-container--bottom">
 <div className="skin-section__card">
 <img src={SensitiveSkin} className="skin-section__image"></img>
   {/* <p className="skin-section__subheader">Sensitive</p> */}
 </div>
 <div className="skin-section__card">
 <img src={DrySkin} className="skin-section__image"></img>
   {/* <p className="skin-section__subheader">Combination</p> */}
 </div>
</div>
</div>
</div>
<Link to="/skin-needs">
 <div  className="skin-section__arrow-wrapper">
   <img src={NextArrow} alt="next arrow" />
   <p className="skin-section__arrow-text">Next</p>
 </div>
 </Link>
</div>