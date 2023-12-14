import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function Checkout() {

    const {total} = useContext(CartContext);

    return (
    <div className='container'>
        <div className="row">
            <div className="col s12 m6">
                <div className="card light-blue lighten-2">
                    <div className="card-content white-text">
                        <span className="card-title">Gracias por su compra!</span>
                        <p>
                            <p className="Info">Total de la compra : ${total}</p>
                            <p>Recuerde cargar su direccion para que podamos realizar el envio.</p>
                        </p>
                    </div>
                    <div className="card-action blue lighten-5">
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
