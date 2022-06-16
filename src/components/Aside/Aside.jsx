import Copyright from "../Copyright/Copyright";
import AsideNav from "../AsideNav/AsideNav";
import "./Aside.css";

function Aside() {
  return (
    <div className="aside">
      <AsideNav />
      <Copyright />
    </div>
  );
}

export default Aside;
