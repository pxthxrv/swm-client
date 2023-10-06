import "./Footer.scss";
import homeIcon from "../../assets/icons/home.svg";
import bankIcon from "../../assets/icons/bank.svg";
import portfolioIcon from "../../assets/icons/portfolio.svg";
import profileIcon from "../../assets/icons/profile.svg";
import homeIndicator from "../../assets/icons/home-indicator.svg"

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer__row">
                    <div className="ftr">
                        <img className="ftr__icon" src={homeIcon} alt=""/>
                        <p className="ftr__text">Home</p>
                    </div>
                    <div className="ftr">
                        <img className="ftr__icon" src={bankIcon} alt=""/>
                        <p className="ftr__text">Bank</p>
                    </div>
                    <div className="ftr">
                        <img className="ftr__icon--portfolio" src={portfolioIcon} alt=""/>
                        <p className="ftr__text">Portfolio</p>
                    </div>
                    <div className="ftr">
                        <img className="ftr__icon" src={profileIcon} alt=""/>
                        <p className="ftr__text">Profile</p>
                    </div>
                </div>
                <div className="footer__col">
                    <img className="home-indicator" src={homeIndicator}/>
                </div>
            </div>
        </>
    )

}