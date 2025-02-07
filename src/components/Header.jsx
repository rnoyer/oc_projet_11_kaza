import { NavLink, Link } from "react-router";
import kasaLogo from '../assets/kasa-logo-header.svg'
import "./Header.scss";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={kasaLogo} alt="Logo Kasa" className="kasa-svg"/>
      </Link>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/apropos">A Propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
