import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"

const ItemListContainer = () => {

  const [loading, setLoading] = useState(true)
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') 
    .then((response)=>{
        return response.json()
    })
    .then((resultado)=>{
      setProductos(resultado)
    })
    .catch(()=>{
      toast.error("Error al cargar los productos")
    })
    .finally(()=>{
      setLoading(false)
    })

  },[categoryId])

  if(loading){
    return <h1 className="load">Cargando...</h1>
  }else{
    return <ItemList productos={productos}/>
  }
}

export default ItemListContainer