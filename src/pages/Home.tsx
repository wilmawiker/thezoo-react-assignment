import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="landing-page">
        <h1>Välkommen till djurparken!</h1>
        <h3>Här kan du ta hand om alla djuren.</h3>
        <img
          src="src/assets/zoologo.png"
          className="logo"
          alt="Silhouettes of a horse, dog, cat and hamster. With the word zoo written on the right side"
        />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
