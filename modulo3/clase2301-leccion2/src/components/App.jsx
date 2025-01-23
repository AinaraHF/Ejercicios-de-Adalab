import { useState } from "react";
import "../styles/App.css";

function App() {
  /*
  El useState varía dependiendo de lo que sea, lista, número, objeto, string...
    const [list, setList] = useState([])
    const [object, setObject] = useState({})
    const [number, setNumber] = useState(0)

  */
  const [mode, setMode] = useState("")
  const handleSelect = (ev) => {
    const valueSelect = ev.target.value; // cuando se escucha evento sobre el select es sobre todo, por lo tanto target y currentTarget son iguales, hacer console.log para saber sino
    valueSelect === "c" ? setMode("light") : setMode("dark"); //operador ternario, también se puede setMode(valueSelect === "c" ? "light" : "dark")
    /*
    if (valueSelect === "c") {
    setMode("light")
    }else {
    setMode("dark")
    }
    */
  }

  return (
    <main className={mode}>
      {/* <> </> fragment, sería otra forma en vez de main para meter varias cosas*/}
      <h1>Eventos y estado</h1>
      <form action="">
        <label htmlFor="">Selecciona modo</label>
        <select name="modo" id="modo" onChange={handleSelect}>
          <option value="c">Claro</option>
          <option value="o">Oscuro</option>
        </select>
      </form>
    </main>
  )
}

export default App
