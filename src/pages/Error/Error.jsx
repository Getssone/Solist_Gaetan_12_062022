import "./Error.css";
import Demo from "../../components/Demo/Demo";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";

/**
 * @description page returned if no user has userId
 */

function Error() {
  return (
    <div className="home">
      <Header />

      <Aside />
      <h1 className="error">Erreur 404</h1>
      <p className="errorp">impossible de trouver cet utilisateur</p>
      <Demo />
    </div>
  );
}

export default Error;
