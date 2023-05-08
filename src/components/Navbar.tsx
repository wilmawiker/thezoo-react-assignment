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
      </nav>
    </>
  );
}

export default Navbar;
