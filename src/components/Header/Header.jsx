import "./Header.scss";

import iphoneHeader from "../../assets/icons/iphone-header.svg";
import backArrow from "../../assets/icons/back-arrow.svg";

export default function Header() {
    return (
        <>
        <div className="header">
            <div className="header__col">
                <img className="iphone-header" src={iphoneHeader}/>
            </div>
            <div className="header__row">
                <img className="back-arrow" src={backArrow}/>
                <h1 className="header-title">Hey Emily!</h1>
            </div>
        </div>
        </>
    )
}