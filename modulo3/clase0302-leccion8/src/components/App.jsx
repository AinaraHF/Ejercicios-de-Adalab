import { Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import Contact from "./Contact"
import ListPage from "./ListPage"
import Detail from "./Detail"
import { useEffect, useState } from "react"
import "../styles/App.css"

function App() {
  
  const [pets, setPets] = useState([])

  useEffect(()=>{
    fetch("https://igarrido-adalab.github.io/api/pets.json")
    .then(resp => resp.json())
    .then(data =>{
      setPets(data)
    })
  }, [])

  //extraer del array un elemento
  const getInfo =(position) => {
    const petFound = pets[position]
    return petFound
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/list" element={<ListPage pets={pets}/>} />
        <Route path="/pet/:position" element={<Detail getInfo={getInfo}/>}/>
      </Routes>
    </>
  )
}

export default App
