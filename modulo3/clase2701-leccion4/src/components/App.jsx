import { useState } from "react"
import Form from "./Form"
import DogData from "./DogData"


function App() {
  const [dog, setDog] = useState ({ //creamos un objeto para ejecutar una única función no 1 por variable
    name: "", url: ""
  })

  const [visibility, setVisibility] = useState("hidden");

  const changeDog = (key, value) => {
    if(key === "url"){
      setDog({...dog, url:value}) // spread operator, permite hacer copia del objeto original ...dog y ahí modificar lo que queramos url:value
    }else{
      setDog({...dog, name:value})
    }
  }

  return (
    <div>
       <h1>Lifting</h1> {/*casi SIEMPRE vamos a trabajar con ello, nos permite enviar funciones de un componente inferior a uno superior y el inferior es el encargado de ejecutar las funciones */}
       <Form changeDog={changeDog} setVisibility={setVisibility}/> {/*pasamos por props la función changeDog a Form */}
      <DogData dog={dog} text="texto" handleAlgo="function" visibility={visibility}/>
    </div>
  )
}

export default App
