import "./Keyinsights.scss";
import React from "react";
import PlusIcon from "../../assets/Vector.png";

const Keyinsights = () => {
  const buttonHandler = () => {
    console.log("clicked");
  };

  return (
    <div className="keyinsights">
      <h1 className="keyinsights__header">Key Insights</h1>
      <div className="keyinsights__button-container">
        <button className="keyinsights__button" onClick={buttonHandler}>
          Tech Stocks to rise in near future.
        </button>
        <div className="keyinsights__img-container">
          <img src={PlusIcon} alt="Plus Icon" className="keyinsights__img" />
        </div>
      </div>
      <div className="keyinsights__button-container">
        <button className="keyinsights__button" onClick={buttonHandler}>
          Changes in the RRSP policy announced.
        </button>
        <div className="keyinsights__img-container">
          <img src={PlusIcon} alt="Plus Icon" className="keyinsights__img" />
        </div>
      </div>
      <div className="keyinsights__button-container">
        <button className="keyinsights__button" onClick={buttonHandler}>
          Great time to invest in bonds.
        </button>
        <div className="keyinsights__img-container">
          <img src={PlusIcon} alt="Plus Icon" className="keyinsights__img" />
        </div>
      </div>
      <div className="keyinsights__button-container">
        <button className="keyinsights__button" onClick={buttonHandler}>
          Tech Stocks to rise in near future.
        </button>
        <div className="keyinsights__img-container">
          <img src={PlusIcon} alt="Plus Icon" className="keyinsights__img" />
        </div>
      </div>
    </div>
  );
};

export default Keyinsights;
