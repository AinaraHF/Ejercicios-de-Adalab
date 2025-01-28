import "../styles/App.css"
import dataJson from "../services/data.json"
import Gallery from "./Gallery"
import Filter from "./Filter"
import { useState } from "react"

function App() {
  
  const [searchValue, setSearchValue] = useState("") //SIEMPRE que input, siempre en variable de estado

  const changeSearch = (value)=>{
    setSearchValue(value.toLowerCase())
  }

  const filterFlowers = dataJson.filter(flower => flower.title.toLowerCase().includes(searchValue)) //SIEMPRE que haya filtro, se crea donde los datos principales y al componente que pinta la lista le mandamos este, como en Gallery

  return (
    <>
    <header><h1>Galería de imágenes</h1></header>
    <main>
      <Filter changeSearch={changeSearch}/>
      <Gallery flowerList={filterFlowers}/> {/*Para pasarle los datos de dataJson a Gallery, lo hacemos por props, en este caso la hemos llamado flowerList*/}
    </main>
    </>
  )
}

export default App


/*
1.- Crear las variables de estado(array de datos, input de buscar)
2.- Crear los componentes(ImgCard, Gallery, Filter(formulario para el input))
*/