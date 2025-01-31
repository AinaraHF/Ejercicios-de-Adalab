import { useEffect, useState } from "react";
import callToApi from "../services/api";

function App() {
  
  const [series, setSeries] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    
    callToApi(searchName).then((response) => {
      
      setSeries(response);
    });
    
  }, [searchName]);

  const handleChange = (ev) => {
    setSearchName(ev.target.value)
  }

  const renderSeries = () =>{
    return series.map((serie, index)=> {
      return <li key={index} >Nombre: {serie.show.name}</li>;
    });
  };

  return (
    <>
      <h1>Buscador de series</h1>
      <form>
        <label htmlFor="name">Escribe aquí el nombre: </label>
        <input type="text" id="name" onChange={handleChange} value={searchName}/>
        <ul>{renderSeries()}</ul>
      </form>
    </>
  )
}

export default App
