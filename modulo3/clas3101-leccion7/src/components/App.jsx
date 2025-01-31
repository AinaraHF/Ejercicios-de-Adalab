import { useEffect, useState } from "react"
import getDataApi from "../services/api"
import ListDrinks from "./ListDrinks"
import "../styles/App.css"
import local from "../services/localStorage"

function App() {
  
  const [drinks, setDrinks] = useState([]) //esto nos basamos en la api para darle nombre y saber qué tipo de dato es
  const [search, setSearch] = useState(local.get("search", "margarita"))

  useEffect (()=>{ //tiene 2 parámetros, una función y un array, se utiliza para controlar 
    getDataApi(search).then(data => setDrinks(data)) //.then xke recogemos una promesa como dijimos con el return fetch del api y promesas se recogen con .then
  }, [search])
/*
1.-No está el [] --> se comporta igual que cuando no está el useEffect (se repite en bucle)
2.- [vacío] --> se ejecuta una única vez al cargar la página
3.- [variableDeEstado] --> se ejecuta cada vez que la variable de estado cambie (buscadores x ejemplo)
*/
  //en el input, se puede hacer una función dentro del onChange en vez de una función manejadora en sí

  useEffect (()=>{
    local.set("search", search) //para coger la función set del localStorage ponemos local.set y así con todas las funciones del localStorage
  }, [search])

  return (
    <>
        <h1>Lista de bebidas</h1>
        <input type="text" onChange={(ev)=>setSearch(ev.target.value)} value={search}/>
        <ListDrinks drinks={drinks}/>
    </>
  )
}

export default App
