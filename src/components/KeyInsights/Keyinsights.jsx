import "./Keyinsights.scss";
import React from "react";
import PlusIcon from "../../assets/Vector.png";
import { useState } from "react";
import { Link } from "react-router-dom";
// import Comments from "./Pages/Comments/comments";

const Keyinsights = () => {
  const [Item1, setItem1] = useState("Tech Stocks to rise in near future.");
  const [Item2, setItem2] = useState("Changes in the RRSP policy announced.");
  const [Item3, setItem3] = useState("Great time to invest in bonds");
  const [Item4, setItem4] = useState("Tech Stocks to rise in near future.");
  const [ShowItem1, setShowItem1] = useState(true);
  const [ShowItem2, setShowItem2] = useState(true);
  const [ShowItem3, setShowItem3] = useState(true);
  const [ShowItem4, setShowItem4] = useState(true);

  const buttonHandler = (e) => {
    console.log(`${e.target.name} shown`);
    const element = document.getElementsByName(e.target.name);
    element[0].classList.add("keyinsights__button--show");
    const buttons = document.getElementsByClassName("keyinsights__button");

    if (e.target.name !== "button1") {
      console.log("button1 hidden");
      setShowItem1(false);
    }
    if (e.target.name !== "button2") {
      console.log("button2 hidden");
      setShowItem2(false);
    }
    if (e.target.name !== "button3") {
      console.log("button3 hidden");
      setShowItem3(false);
    }
    if (e.target.name !== "button4") {
      console.log("button4 hidden");
      setShowItem4(false);
    }
  };

  const ShowHide = (state) => {
    if (state === true) {
      return "";
    } else {
      return "keyinsights__button--hidden";
    }
  };

  const ImgShowHide = () => {
    if (
      ShowItem1 === true &&
      ShowItem2 === true &&
      ShowItem3 === true &&
      ShowItem4 === true
    ) {
      return "";
    } else {
      return "keyinsights__img--hidden";
    }
  };

  const containerShowHide = () => {
    if (
      ShowItem1 === true &&
      ShowItem2 === true &&
      ShowItem3 === true &&
      ShowItem4 === true
    ) {
      return "";
    } else {
      return "keyinsights__button-container--hidden";
    }
  };

  return (
    <Router>
      <div className="keyinsights">
        <h1 className="keyinsights__header">Key Insights</h1>
        <div className="keyinsights__container">
          <div
            className={`keyinsights__button-container ${containerShowHide()}`}
          >
            <Link to="/comment">
              <button
                className={`keyinsights__button ${ShowHide(ShowItem1)}`}
                name="button1"
                onClick={buttonHandler}
              >
                {Item1}
                <div className="keyinsights__img-container">
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className={`keyinsights__img ${ImgShowHide()}`}
                  />
                  <Route path="/comment" component={Comments} />
                </div>
              </button>
            </Link>
          </div>
          <div
            className={`keyinsights__button-container ${containerShowHide()}`}
          >
            <Link to="/comment">
              <button
                className={`keyinsights__button ${ShowHide(ShowItem2)}`}
                name="button2"
                onClick={buttonHandler}
              >
                {Item2}
                <div className="keyinsights__img-container">
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className={`keyinsights__img ${ImgShowHide()}`}
                  />
                </div>
              </button>
            </Link>
          </div>
          <div
            className={`keyinsights__button-container ${containerShowHide()}`}
          >
            <Link to="/comment">
              <button
                className={`keyinsights__button ${ShowHide(ShowItem3)}`}
                name="button3"
                onClick={buttonHandler}
              >
                {Item3}
                <div className="keyinsights__img-container">
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className={`keyinsights__img ${ImgShowHide()}`}
                  />
                </div>
              </button>
            </Link>
          </div>
          <div
            className={`keyinsights__button-container ${containerShowHide()}`}
          >
            <Link to="/comment">
              <button
                className={`keyinsights__button ${ShowHide(ShowItem4)}`}
                name="button4"
                onClick={buttonHandler}
              >
                {Item4}
                <div className="keyinsights__img-container">
                  <img
                    src={PlusIcon}
                    alt="Plus Icon"
                    className={`keyinsights__img ${ImgShowHide()}`}
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Keyinsights;
