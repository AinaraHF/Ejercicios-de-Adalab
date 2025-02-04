import { matchPath, Route, Routes, useLocation } from "react-router-dom"
import ListUser from "./ListUser"
import api from "../services/api"
import { useEffect, useState } from "react"
import Filters from "./filters/Filters"
import Detail from "./Detail"

function App() {
    
  const [users, setUsers] = useState([])
  const [filterName, setFilterName] = useState("") //creamos esta variable para recoger los datos del input en FilterByName, y por props se lo pasamos a Filters y de ahí a FilterByName
  const [filterGender, setFilterGender] = useState("") //en este caso useState original es "" porque este es el value del Seleccione
  const [filterCities, setFilterCities] = useState([])

//api().then(=>) recogemos aquí los datos, .then es el encargado de gestionar cuando la promesa pase de pendiente a done que en este caso sería modificar la variable de estado
  useEffect(()=>{
    api().then((data)=>{ setUsers(data)})
  }, [])

  const changeFilterCities = (valueCity) =>{
  /*
    1.- Si la ciudad ya está en el array, la quito y actualizo filterCities
    2.- Si la ciudad no está en el array, la añado al array filterCities
  */
    if(filterCities.includes(valueCity)){
      const updatedCities = filterCities.filter(city=> city !== valueCity)
      setFilterCities(updatedCities)

    }else{
      setFilterCities([...filterCities, valueCity])
    }
  }

  const filterUsers = users
  .filter((item)=> item.name.toLowerCase().includes(filterName))
  .filter((item)=> filterGender ? item.gender === filterGender : true) //hacemos un op ternario xke si pone Seleccione aparece vacío xke nadie tiene el gender vacío, y para que aparezcan ponemos si filterGender tiene algo ke lo coja y sino, true (return true), para ke nos de todo
  .filter(item => {
    if (filterCities.length === 0) {//NUNCA poner filterCities === []
      return true
    } else {
      return filterCities.includes(item.city)
    } 
  })
  //podemos hacer .sort si queremos que se ordenen, sería recomendable en el newArray, api.js cuando llegan los datos de la array BONUS???????!!!!!

  const getCities = () => {
    const cities = users.map(user => user.city) //return implícito, una línea de código no hace falta ni return ni {}
    //quiero que no haya ciudades repetidas (eliminar los elementos repetidos)
    const citiesSet = new Set(cities) //nos devuelve un objeto, pero queremos array
    const uniqueCities = [...citiesSet] //transformamos el objeto en array
    return uniqueCities;
}

  /*
  1.- Verificar si estoy en la ruta /person/:idPerson
  2.- Sacar el id de la ruta :idPerson
  3.- Buscar dentro del array de los usuarios con el id de la ruta (find)
  ***En vez de estas 4 líneas de abajo podemos usar el useParams, lo usamos en otro ejer, 3.8 router mascotas, revisar!!!***
  */

  const { pathname } = useLocation() //pusimos info y con console.log vimos que era un objeto y solo nos interesaba el punto pathname, entonces hacemos destructuring { pathname }
  const userRoute = matchPath("/person/:idPerson", pathname) //dos parámetros, el primer la ruta que necesito y el segundo el que me da la página, a ver si match
  const userIdUrl = userRoute ? userRoute.params.idPerson : null;

  const userDetail = users.find(item=> item.id === userIdUrl) //aquí estará toda la info del usuario clicado y se lo tenemos que pasar a Detail x props

  return (
    <>
    
    <Routes>
      <Route path="/" element={
        <>
        <Filters setFilterName={setFilterName} setFilterGender={setFilterGender} filterName={filterName} filterGender={filterGender} cities={getCities()} changeFilterCities={changeFilterCities}/>
        <ListUser data={filterUsers}/>
        </>
      } />
      <Route path="/person/:idPerson" element={<Detail data={userDetail}/>}/>
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
