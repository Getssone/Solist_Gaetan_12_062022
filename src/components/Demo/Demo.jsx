import "./Demo.css";
import { Link } from "react-router-dom";

export default function Demo() {
  return (
    <div className="profile-link">
      <p>
        Avec API,(aucune modification)
        <br></br>
        Avec données mockées (mettre en commentaire les données API et décomanter les les donnée mockées):
      </p>
      <div className="demo">
        <Link className="btn" to="/user/12">
          <div>User 12</div>
        </Link>
        <Link className="btn" to="/user/18">
          <div>User 18</div>
        </Link>
      </div>
    </div>
  );
}
