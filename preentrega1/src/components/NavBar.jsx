import React from 'react';
import CartWidget from './CartWidget';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand mx-auto" href="#">
          <h1> NUEVA TIENDA </h1>
        </a>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#"> PRODUCTOS </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> OFERTAS </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> PRÓXIMOS LANZAMIENTOS </a>
            </li>
          </ul>
        </div>

        <CartWidget />
        
      </div>
    </nav>
  );
};

export default NavBar;