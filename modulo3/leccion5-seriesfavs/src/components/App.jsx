import { useState } from "react";

function App() {
  
  const [series, setSeries] = useState([
    { id: "123", name: "Juego de tronos" },
    { id: "456", name: "Las chicas Gilmore" },
    { id: "678", name: "Gambita de Dama" },
  ]);
  const [favorites, setFavorites] = useState([]);

  const handleClick = (ev) =>{
    const serieId = ev.target.id
    series.filter((serie)=> serieId )
    setFavorites([serieId])
  }

  const seriesList = series.map((serie)=> <li key={serie.id} id={serie.id} onClick={handleClick}>{serie.name}</li>)

  return (
    <>
      <h1>Series favoritas</h1>
      <ul>
        {seriesList}
      </ul>
      <ul>
        {favorites}
      </ul>
    </>
  )
}

export default App
