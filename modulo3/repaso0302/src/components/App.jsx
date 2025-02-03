import { Route, Routes } from "react-router-dom"
import ListUser from "./ListUser"
import api from "../services/api"
import { useEffect, useState } from "react"
import Filters from "./Filters"

function App() {
    
  const [users, setUsers] = useState([])
  const[filterName, setFilterName] = useState("") //creamos esta variable para recoger los datos del input en FilterByName, y por props se lo pasamos a Filters y de ahí a FilterByName
  const[filterGender, setFilterGender] = useState("") //en este caso useState original es "" porque este es el value del Seleccione

//api().then(=>) recogemos aquí los datos, .then es el encargado de gestionar cuando la promesa pase de pendiente a done que en este caso sería modificar la variable de estado
  useEffect(()=>{
    api().then((data)=>{ setUsers(data)})
  }, [])

  const filterUsers = users
  .filter((item)=> item.name.toLowerCase().includes(filterName))
  .filter((item)=> filterGender ? item.gender === filterGender : true) //hacemos un op ternario xke si pone Seleccione aparece vacío xke nadie tiene el gender vacío, y para que aparezcan ponemos si filterGender tiene algo ke lo coja y sino, true (return true), para ke nos de todo


  return (
    <>
    
    <Routes>
      <Route path="/" element={
        <>
        <Filters setFilterName={setFilterName} setFilterGender={setFilterGender}/>
        <ListUser data={filterUsers} />
        </>
      } />
    </Routes>

    </>
  )
}

export default App

/*
1.- Función para obtener datos API (services) / limpio los datos con map
2.- Crear useState para guardar los datos de los usuarios
3.- useEffect para ejecutar la función que pide los datos a la API (porque pedimos los datos de la API al cargar la página)
*/
