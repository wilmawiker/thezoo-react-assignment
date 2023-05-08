import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/animals">Djuren</Link>
          </li>
        </ul>
        <span>
          <img
            src="src/assets/rabbit.png"
            alt="Rabbit silhouette"
            className="nav-rabbit"
          />
        </span>
      </nav>
    </>
  );
}

export default Navbar;
