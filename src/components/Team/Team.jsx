import "./Team.scss";
import dan from "../../assets/icons/dan.svg";
import leah from "../../assets/icons/leah.svg";
import mia from "../../assets/icons/mia.svg";
import button from "../../assets/icons/button.svg";

export default function Team() {
  return (
    <div className="team">
      <h1 className="team__title">Advisory Team</h1>
      <div className="team__people">
        <div className="person">
          <img className="person__img" src={dan} />
          <p className="person__name">Dan Fletcher</p>
          <p className="person__position">Wealth</p>
        </div>
        <div className="person">
          <img className="person__img" src={leah} />
          <p className="person__name">Leah Moretti</p>
          <p className="person__position">Wealth</p>
        </div>
        <div className="person">
          <img className="person__img" src={mia} />
          <p className="person__name">Mia Hope</p>
          <p className="person__position">Relations</p>
        </div>
      </div>
      <img className="btn-consult" src={button} />
      {/* <button className="btn-consult">Consult</button> */}
    </div>
  );
}
