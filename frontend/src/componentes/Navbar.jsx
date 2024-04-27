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
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={iconoPan} width="75px" height="72" className="navbar-logo" />
          <span className="has-text-weight-semibold has-text-white has-text-weight-bold is-size-4">PANADERIA</span>
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
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-6" href="/">
                INICIO
              </a>
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-6" href="/#nosotros">
                NOSOTROS
              </a>
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-6" href="/#productos">
                PRODUCTOS
              </a>
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-6" href="/#contactanos">
                CONTACTENOS
              </a>
              <a className="button is-success has-text-weight-bold is-size-6 is-rounded" href="/login" style={{ 'background-color': '#F88502' }}>
                REGISTRARSE
              </a>
              <a className="button is-success has-text-weight-bold is-size-6 is-rounded" href="/login" style={{ 'background-color': '#F88502' }}>
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

