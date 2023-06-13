import "./NavbarFooter.scss";
import { Link } from "react-router-dom";
import { useState } from "react";


export const NavBarFooter: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbarFooter">
        <div className="navbar-containerFooter">
          <Link to="/" className="navbar-logoFooter">
            Logo
          </Link>
          <div className="navbar-toggleFooter" onClick={handleToggle}>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={isOpen ? "navbar-menuFooter active" : "navbar-menuFooter"}>
            <li className="navbar-itemFooter">
              <Link to="/" className="navbar-linkFooter">
                Home
              </Link>
            </li>
            <li className="navbar-itemFooter">
              <Link to="/souvenir" className="navbar-linkFooter">
                Souvenirs
              </Link>
            </li>
            <li className="navbar-itemFooter">
              <Link to="/venue" className="navbar-linkFooter">
                Venue
              </Link>
            </li>
            <li className="navbar-itemFooter">
              <Link to="/invites" className="navbar-linkFooter">
                E-invites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
