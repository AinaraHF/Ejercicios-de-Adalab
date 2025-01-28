import { useState } from "react"
import dataJson from "../services/data.json" //hay que importar la lista de productos que está en data.json en una variable y esta será el valor inicial del useState de products
import "../styles/App.css"
import ListProducts from "./ListProducts";
import Form from "./Form";

function App() {
  const [products, setProducts]= useState(dataJson);
  const [search, setSearch]=useState("");

  const filterArray = products.filter((eachProduct)=> eachProduct.title.toLowerCase().includes(search)) //para buscar dentro de un array que el titulo incl lo que escribimos en el input en minuscula
  // dentro del return no se pueden poner if, pero si un ternario como el de abajo
  return (
    <>
    <h1>Lista productos</h1>
    <Form setSearch={setSearch}/>
    {
      filterArray.length !== 0 ?
    <ListProducts list={filterArray}/>
  : <p>Producto no encontrado</p>}
    </>
  )
}

export default App


/*
OBJETIVO
1.- Pintar el listado de productos
2.- Filtrar los productos por nombre (input:text), campos de datos de formulario SIEMPRE van en una variable de estado; datos de un servidor tb, damos que se tengan que ver en html tb
3.- Añadir un nuevo producto
**Para pintar una lista de cosas
**Cuando tenemos una lista de datos, los dividimos en dos componentes (Lista de Cosas y Item de la lista, este se suele poner de forma indiv xke se suele reutilizar)
*/