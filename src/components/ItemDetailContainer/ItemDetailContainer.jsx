import { useEffect, useState } from "react"
import { getProductsById} from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/client"


const ItemDetailContainer = ( ) => {
    const [products , setProducts] = useState(null) 

    const {itemId} = useParams()

    useEffect (() => {
        const librosRef = doc(db,'libros', itemId)
        getDoc(librosRef)
        .then((snapshot) => {
           if (snapshot.exists()){
            setProducts(
                {id: snapshot.id,
                ...snapshot.data()
            }
            )
           }
        })
        .catch(e=> console.error(e))
        .finally(()=>setLoading(false))

    }, [])

    return (
        <div className="ItemDetailContainer">
            <ItemDetail {...products} />
        </div>
    )

}
export default ItemDetailContainer;