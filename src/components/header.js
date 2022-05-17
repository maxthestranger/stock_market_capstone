import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';

const Header = () => (
  <header>
    <div className="container flex">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <span>Stock Broker</span>
      </Link>

      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className="navLink">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navLink">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/ref" className="navLink">
              References
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
