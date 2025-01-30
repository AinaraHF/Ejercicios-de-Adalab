import { useState } from "react"

function App() {
  
  const [selectedIngredient, setSelectedIngredient] = useState(false)
  const [text, setText] =useState("")

  const handleChange = (ev) =>{
    const selection = ev.target.checked
    setSelectedIngredient(selection)
    console.log(selectedIngredient)
  }
  // if(selectedIngredient === "potatoes" && "eggs" && "onion"){
  //   setText("¡Eres una persona concebollista! 😀")
  // }else{
  //   setText("¡Eres un robot sin paladar!😈")
  // }

  return (
    <>
    <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
    <form action="">
      <input type="checkbox" name="macarrones" id="macs" onChange={handleChange}/>
      <label htmlFor="macs" >Macarrones</label>
      <input type="checkbox" name="patatas" id="potatoes" onChange={handleChange}/>
      <label htmlFor="potatoes" >Patatas</label>
      <input type="checkbox" name="nueces" id="nuts" onChange={handleChange}/>
      <label htmlFor="nuts" >Nueces</label>
      <input type="checkbox" name="huevos" id="eggs" onChange={handleChange}/>
      <label htmlFor="eggs" >Huevos</label>
      <input type="checkbox" name="cebolla" id="onion" onChange={handleChange}/>
      <label htmlFor="onion" >Cebolla</label>
      <input type="checkbox" name="cerveza" id="beer" onChange={handleChange}/>
      <label htmlFor="beer" >Cerveza</label>
      <p>{text}</p>
    </form>
    
    
    </>
  )
}

export default App
