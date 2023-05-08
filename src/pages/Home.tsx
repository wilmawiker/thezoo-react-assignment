import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="landing-page">
        <h1>Välkommen till djurparken!</h1>
        <h3>Här kan du ta hand om alla djuren.</h3>
        <img src="src/assets/zoo.png" />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
