import { useState } from "react"

function App() {
  
  const [name, setName] = useState("")

  const handleInput = (ev) => {
    setName(ev.target.value) //recogemos el valor del input, se muestra en Componentes, App, hooks State
  }

  
  const handleClick = () => {
    setName("") //para que se resetee internamente y el campo donde escribe el usuario, le tenemos que dar un value={nombre variable estado}, value={name} en este caso
  }

  const handleForm = (ev) => { 
    ev.preventDefault() //en este caso como tiene dos botones, abría que ponerselo a los dos, entonces es mejor ponerle onSubmit al form en sí

  }


  return (
    <>
       <h1>Formularios controlados</h1>
       <form onSubmit={handleForm}>
          <input type="text" placeholder="Nombre" onChange={handleInput} value={name}/>
          <button>aceptar</button>
          <button onClick={handleClick}>reset</button>
       </form>
    </>
  )
}

export default App
