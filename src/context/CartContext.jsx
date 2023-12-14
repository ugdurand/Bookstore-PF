import { createContext , useState } from "react";

export const CartContext =  createContext({
    cart : []
    
})

export const CartProvider = ({ children }) => {
    const [ cart ,setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    console.log(cart)
    
    const addItem = (item , quantity)=>{
        if(! isInCart (item.id)) {
            setCart(prev =>[...prev ,{...item,quantity}]);
            setTotalQuantity(totalQuantity + quantity);
            setTotal(total + item.price * quantity)
            
        } else{
            alert("El producto ya se encuentra en el carrito");
        }
    }

    const removeItem =(itemId)=>{

        const removedProd = cart.find( (prod) => prod.id == itemId );
        const cartUpdated = cart.filter(prod =>prod.id !==itemId)
        setCart(cartUpdated);
        
        const totalQuantityUpdated = cartUpdated.reduce( (total, prod) => total + prod.quantity, 0 );
        setTotalQuantity(totalQuantityUpdated);

        setTotal(total - removedProd.price * removedProd.quantity);

    }

    const clearCart =()=>{
        setCart([]);
        setTotalQuantity (0);
    }

    const isInCart =(itemId) =>{
        return cart.some(prod => prod.id ===itemId)
    }

    return (
        <CartContext.Provider value={{cart, addItem,removeItem,clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}
