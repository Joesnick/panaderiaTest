import { useState } from 'react';
import iconoPan from '../assets/img/pan.png';
import '../App.css'
import './Contactanos'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation" style={{ 'backgroundColor': '#8a7a70' }}>
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={iconoPan} width="55" height="28" className="navbar-logo is-inline" style={{ marginRight: '10px' }} />
          <span className="has-text-weight-semibold has-text-white has-text-weight-bold is-size-3">PANADERIA</span>
        </a>
        <a
          role="button"
          className={`navbar-burger ${menuOpen ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={menuOpen}
          data-target="navbarBasicExample"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${menuOpen ? 'is-active' : ''} is-right`}>
        <div className="navbar-start"></div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-5" href="/">
                INICIO
              </a>
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-5" href="/#nosotros">
                NOSOTROS
              </a>
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-5" href="#productos">
                PRODUCTOS
              </a>
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-5" href="#contactanos">
                CONTACTENOS
              </a>
              <a className="button is-success has-text-weight-bold is-size-5 is-rounded" href="/login" style={{ 'background-color': '#F88502' }}>
                INICIAR SESION
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

