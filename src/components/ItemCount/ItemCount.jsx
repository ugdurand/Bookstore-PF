import React from 'react'
import { useState } from 'react'

function ItemCount({stock, initial, onAdd}) {
    const [quantity,setQuantity] = useState (initial) 

    const increment =() =>{
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement =() =>{
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

return (
 <div className='container center'>
        <div className='row'>
            <div className='s2'>
                <button className='waves-effect waves-light light-blue lighten-2 btn' onClick={decrement}>-</button>
            </div>
            <div className='s8'>
                <h4 className='Number'>{quantity}</h4>
            </div>
            <div className='s2'>
                <button className='waves-effect waves-light light-blue lighten-2 btn' onClick={increment}>+</button>
            </div>
        </div>
        <div className='row'>
            <button className='waves-effect waves-light light-blue lighten-2 btn' onClick={()=> onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
 </div>
)
}

export default ItemCount