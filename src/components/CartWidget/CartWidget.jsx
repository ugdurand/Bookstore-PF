import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';


export default function CartWidget() {

  const  {totalQuantity} = useContext (CartContext);
  
  return (
    <div>
      <Link to={"/cart"} style={{display: totalQuantity > 0? 'block': 'none'}}>
        <ul>
          <li><i className="material-icons">shopping_cart </i> </li>
          <li>{totalQuantity}</li>
        </ul>
      </Link>
    </div>
  )
}



