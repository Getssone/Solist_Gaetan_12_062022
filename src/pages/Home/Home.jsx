import Construction from "../../components/Construction/Construction";
import Demo from "../../components/Demo/Demo";
import Header from "../../components/Header/Header";
import Aside from "../../components/Aside/Aside";

function Home() {
  return (
    <div className="home">
      <Header />
      <Aside />
      <Construction />
      {/* 2 Boutons test */}
      <Demo />
    </div>
  );
}

export default Home;
