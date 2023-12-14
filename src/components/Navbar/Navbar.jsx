import React from 'react'

import 'materialize-css/dist/css/materialize.min.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>

      <header>
        <nav>
          <div className="nav-wrapper blue darken-4">
            <a href="#!" className="brand-logo center"><NavLink to={`/`}>📕 BookStore</NavLink></a>
            <ul className="left hide-on-med-and-down">
              <li className="active"><NavLink to={`/`}>Libros </NavLink></li>
              <li><a><NavLink to={`/categories`}>Generos </NavLink></a></li>
              <li><a><NavLink to={`/contact`}>Contacto</NavLink></a></li>
              <li><CartWidget /></li>
            </ul>
          </div>

        </nav>
      </header>
    </>
  )
}
