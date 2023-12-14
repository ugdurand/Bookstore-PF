import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name , price , stock }) => {

    const [quantityAdded , setQuantityAdded] = useState (0)

    const  {addItem} =useContext(CartContext)

   
    
    const handleOnAdd = (quantity) =>{
        setQuantityAdded (quantity)

        const item ={
            id, name, price
        }

        addItem(item,quantity)

      

    }

    return(
        <div className="row">
            <div className="col s12 m6">
                <div className="card light-blue lighten-2">
                    <div className="card-content white-text">
                        <span className="card-title">{name}</span>
                        <p>
                            <p className="Info">Precio : ${price}</p >
                            {
                            quantityAdded > 0 ? (
                                <p className="Info">Cantidad : {quantityAdded}</p>
                            ) : (
                                <p className="Info">Stock disponible : {stock}</p>
                            )
                            }
                        </p>
                    </div>
                    <div className="card-action blue lighten-5">
                        {
                            quantityAdded > 0 ? (
                                <div>
                                    <Link to= '/cart' className="Option">Terminar Compra</Link>
                                    <Link to= '/' className="Option">Seguir Comprando</Link>
                                </div>) 
                                : (<ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;