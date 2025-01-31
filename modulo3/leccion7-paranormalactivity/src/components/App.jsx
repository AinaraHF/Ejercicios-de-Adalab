import { useEffect, useState } from "react";
import callToApi from "../services/api";

function App() {
  
  const [characters, setCharacters] = useState([]);
  // Creamos searchName para gestionar el input de búsqueda, por eso es un string vacío
  const [searchName, setSearchName] = useState("");

 
  useEffect(() => {
    
    callToApi().then((response) => {
      
      setCharacters(response);
    });
    
  }, );

  return (
    <h1>Template React</h1>
  )
}

export default App
