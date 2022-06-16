import { NavLink } from "react-router-dom";

function HeaderNav() {
  return (
    <ul className="nav-header">
      <li>
        <NavLink className="links" activeClassName="selected" exact to="/">
          Accueil
        </NavLink>
      </li>
      <li>
        <NavLink className="links" activeClassName="selected" to="/profile" replace>
          Profil
        </NavLink>
      </li>
      <li>
        <NavLink className="links" activeClassName="selected" to="/settings">
          Réglage
        </NavLink>
      </li>
      <li>
        <NavLink className="links" activeClassName="selected" to="/network">
          Communauté
        </NavLink>
      </li>
    </ul>
  );
}

export default HeaderNav;
