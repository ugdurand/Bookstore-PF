import React from 'react'
import { NavLink } from 'react-router-dom';

export default function CategoriesContainer() {
    
    return (

        <div className='container'>
            <p>Generos</p>
            <div className='row'>
                <div className="collection">
                    <a href="#!" className="collection-item"><NavLink to={`/category/${"Parodia"}`}>Parodia </NavLink></a>
                    <a href="#!" className="collection-item"><NavLink to={`/category/${"Misterio"}`}>Misterio </NavLink></a>
                    <a href="#!" className="collection-item"><NavLink to={`/category/${"Fantasia"}`}>Fantasia </NavLink></a>
                    <a href="#!" className="collection-item"><NavLink to={`/category/${"Novelas"}`}>Novelas </NavLink></a>
                    
                  
                </div>
            </div>

        </div>
    )
}
