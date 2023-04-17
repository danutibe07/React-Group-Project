import { NavLink } from "react-router-dom";
import img from "../components/images/logo.png"
const Header = () => {
  return (
    <div>
        <div className="navlogo">
            <img src={img} alt="image" />
        <h2>Space Travelers&nbsp; Hub</h2>
        </div>
      <ul>
        <li>
          <NavLink to="/mission">Mission</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
