import { useState } from "react";
import "../styles/App.css";

function App() {
  
  //funciones a crear dentro del componente, el 99% de las veces, son arrow
  //let nameUser = ""; este tipo de variables no nos funcionan en este caso, tenemos que usar useState
  //let lastName = "";

  const [userName, setUserName] = useState(""); // esto es una varibale de estado y tiene 2 parámetros el nombre de la variable que lo declaramos aquí y la función
  const [lastName, setLastName] = useState(""); // una varibale de estado no se puede cambiar sin más, sino usando el setUserName, además hay que indicar el valor inicial en useState, vacío en este caso
  const handleChangeInput = (ev) =>{
    const input = ev.target.id; // esto lo ponemos para saber qué input es el que ha cambiado y lo podemos ver con console.log(input)
    const value = ev.target.value; // esto es para recoger el valor del input
    if(input === "name"){
      setUserName(value);
    }else {
      setLastName(value);
    }
  }

  return (
    <main>
      {/* <> </> fragment, sería otra forma en vez de main para meter varias cosas*/}
      <h1>Eventos y estado</h1>
      <form action="">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" onChange={handleChangeInput}/>
        <label htmlFor="lastname">Apellido</label>
        <input type="text" name="lastname" id="lastname" onChange={handleChangeInput}/>
      </form>
      <p>Bienvenida: {userName} {lastName}</p>
    </main>
  )
}

export default App
