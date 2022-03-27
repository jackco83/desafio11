import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${itemId}`)
    .then((response)=>{
      return response.json()
    })
    .then((respuesta)=>{
      setItem(respuesta)
    })
    .catch(()=>{
      toast.error("Error al cargar el producto")
    })
    .finally(()=>{
      setLoading(false)
    })

  },[itemId])

  if(loading){
    return <h1 className="load">Cargando...</h1>
  }else{
    return <ItemDetail item={item} />
  }
}

export default ItemDetailContainer