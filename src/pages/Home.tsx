import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="landing-page">
        <h1>Välkommen till djurparken!</h1>
        <h3>Här kan du ta hand om djuren.</h3>
      </div>
    </>
  );
}

export default Home;
