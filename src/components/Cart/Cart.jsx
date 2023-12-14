import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

export default function Cart() {

    const {cart, clearCart, totalQuantity, total} =useContext (CartContext);
    
    if(totalQuantity ===0){
        return(
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to={"/"}> Ver Productos</Link>
            </div>
        )
    }

  return (
    <div className='container'>
        {
            cart.map(
                p => <CartItem key={p.id} {...p}/>
            )            
        }
        <div className='row'>
            <div className='col right-align'>
                <p className='z-depth-4'>Total :${total}</p>
            </div>
        </div>
        <div className='row'>
            <div className='col center-align'>
                <button className='waves-effect waves-light light-blue lighten-2 btn' onClick={()=>clearCart()}>
                    Limpiar Carrito
                </button>
            </div>
        </div>
        <div className='row'>
            <div className='col center-align'>
                <button className='waves-effect waves-light blue lighten-5 btn'>
                    <Link to={'/checkout'}>Checkout</Link>
                </button>
            </div>
        </div>
    </div>
  )
}
