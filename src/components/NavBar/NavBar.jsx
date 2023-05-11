import { Link } from "react-router-dom";

import "./NavBar.css";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/Posts">VER POSTS</Link>
        </li>
        <li>
          <Link to="/Form">CREAR POST</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
