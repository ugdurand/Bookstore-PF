import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory} from "../asyncMock"
import ItemList from "../ItemList/ItemList"
import {useParams} from 'react-router-dom'
import { db } from "../../firebase/client"
import { collection , getDocs, query, where } from "firebase/firestore"

const ItemListContainer =({greeting}) => {
    
    const [products , setProducts] = useState([])

    const {categoryId} = useParams()
    useEffect (() => {
        
      const variosLibrosRef = categoryId ? 
      query(collection(db, "libros"), where("category", "==", categoryId))
      : collection(db, "libros")

      getDocs (variosLibrosRef)
      .then(snapshot => {
        console.log( snapshot.docs.map(doc=>({id : doc.id, ...doc.data()})))
        setProducts(
            snapshot.docs.map(doc=>({id : doc.id, ...doc.data()})))
        })
        .catch(e=> console.error(e))
        .finally(()=>setLoading(false))

    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer