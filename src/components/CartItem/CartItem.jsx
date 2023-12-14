import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export default function CartItem(props) {

 const {removeItem} = useContext (CartContext);

  return (
    <div className='row z-depth-2 light-blue lighten-2'>
      <div className='col'>{props.name}</div>
      <div className='col'>cantidad: {props.quantity}</div>
      <div className='col'>precio unitario{props.price}</div>
      <div className='col'>subtotal: {props.price * props.quantity}</div>
      <div className='col'  onClick={()=>removeItem(props.id)} ><a className='waves-effect waves-light btn'>X</a></div>

    </div>

    
  )
}


