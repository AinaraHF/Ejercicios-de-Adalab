import { useState } from "react"
import "../styles/App.css"

function App() {
  
  const [menu, setMenu] = useState ("hidden")
  const [burger, setBurger] = useState("")

  const handleClickBurger = () =>{
    setMenu("")
    setBurger("hidden")
  }

  const handleClickarrow = () =>{
    setMenu("hidden")
    setBurger("")
  }


  /*const handleClick = () =>{
    if(menu === "hidden"){
      setBurger("")
    }else{
      setBurger("hidden")
      setMenu("")
    }
  }*/

  return (
    <>
    <button className={burger} onClick={handleClickBurger}>☰</button>
    <div className={menu}>
      <i className="fa-solid fa-arrow-left" onClick={handleClickarrow}></i>
      <ul>
        <li>Home</li>
        <li>Nosotras</li>
        <li>Contacto</li>
      </ul>
    </div>
    
    </>
  )
}

export default App
