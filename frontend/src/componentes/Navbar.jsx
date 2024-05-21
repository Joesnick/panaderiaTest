// src/componentes/Navbar.jsx
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import iconoPan from '../assets/img/pan.png';
import AuthContext from '../AuthContext.jsx';
import '../App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth(null);

  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={iconoPan} width="75px" height="72" className="navbar-logo" alt="Logo" />
          <span className="has-text-weight-semibold has-text-white has-text-weight-bold is-size-4">PANADERIA</span>
        </Link>
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
              <Link className="navbar-item has-text-white has-text-weight-semibold is-size-6" to="/">
                INICIO
              </Link>
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-6" href="/#nosotros">
                NOSOTROS
              </a>
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-6" href="/#productos">
                PRODUCTOS
              </a>
              <a className="navbar-item has-text-white has-text-weight-semibold is-size-6" href="/#contactanos">
                CONTACTENOS
              </a>
              {auth ? (
                <>
                  <span className="navbar-item has-text-white has-text-weight-semibold is-size-6">Hola, {auth.name}
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256">
                      <path
                        fill="currentColor" d
                        ="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8" />
                    </svg>
                  </span>
                  <button onClick={handleLogout} className="button is-info has-text-weight-bold is-size-6 is-rounded" style={{ backgroundColor: '#F88502' }}>
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link className="button is-success has-text-white-weight-bold is-size-6 is-rounded" to="/login" style={{ backgroundColor: '#F88502' }}>
                    INICIAR SESION
                  </Link>
                  <Link className="button is-success has-text-white-weight-bold is-size-6 is-rounded" to="/login" style={{ backgroundColor: '#F88502' }}>
                    REGISTRARSE
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
