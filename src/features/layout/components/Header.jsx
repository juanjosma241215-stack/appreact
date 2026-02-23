import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-dark text-white py-3 w-100">
      <div className="container"> 
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1 className="m-0 h3">CARRITO DE COMPRAS</h1>
            <small className="text-secondary">Maquetación profesional en React</small>
            <div className="d-flex gap-2 mt-2">
               <input type="text" className="form-control form-control-sm" placeholder="Buscar..." />
               <button className="btn btn-primary btn-sm">Buscar</button>
            </div>
          </div>
          <nav>
            <ul className="nav">
              {/* Usamos NavLink en lugar de <a href>. No incluyas /appreact aquí, el Router lo hace solo */}
              <li className="nav-item">
                <NavLink to="/inicio" className={({isActive}) => isActive ? "nav-link text-primary" : "nav-link text-white"}>Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/articles" className={({isActive}) => isActive ? "nav-link text-primary" : "nav-link text-white"}>Article</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/props" className={({isActive}) => isActive ? "nav-link text-primary" : "nav-link text-white"}>Props</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};