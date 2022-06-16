import bike from "../../assets/bike-icon.svg";
import yoga from "../../assets/yoga-icon.svg";
import fitness from "../../assets/fitness-icon.svg";
import swim from "../../assets/swim-icon.svg";

function AsideNav() {
  return (
    <ul className="aside-icones">
      <li className="aside-icon">
        <img src={yoga} alt="yoga" />
      </li>
      <li className="aside-icon">
        <img src={swim} alt="natation" />
      </li>
      <li className="aside-icon">
        <img src={bike} alt="vélo" />
      </li>
      <li className="aside-icon">
        <img src={fitness} alt="fitness" />
      </li>
    </ul>
  );
}

export default AsideNav;
