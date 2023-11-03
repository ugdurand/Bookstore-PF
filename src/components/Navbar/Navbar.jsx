import React from 'react'

import 'materialize-css/dist/css/materialize.min.css';
import CartWidget from '../CartWidget/CartWidget';

export default function Navbar() {
  return (
    <>

      <header>

        <nav>
          <div className="nav-wrapper blue darken-4">
            <a href="#!" className="brand-logo center">📕 BookStore</a>
            <ul className="left hide-on-med-and-down">
              <li className="active"><a>Libros</a></li>
              <li><a>Peliculas</a></li>
              <li><a>Contacto</a></li>
              <li><CartWidget cantidad={"3"}/></li>
            </ul>
          </div>

        </nav>
      </header>
    </>
  )
}
