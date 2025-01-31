import { useState } from "react";
import "../styles/App.css";

function App() {
  
  const [mode, setMode] = useState("");
  const [text, setText] = useState("");

  const handleClick = (ev) => {
    ev.preventDefault()
    if(mode === "lightmode"){
      setMode("darkmode")
      renderDarkModeText()
    }else {
      setMode("lightmode")
      renderDarkModeText()
    }
  }

  function renderDarkModeText(){
    if(mode === "lightmode"){
      setText("")
    }else if (mode === "darkmode"){
      setText("Tienes activado el dark mode")
    }
  }

  return (
    <div className={mode}>
      <button onClick={handleClick}>Des/activar el dark mode</button>
      <p>{text}</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam unde aliquid voluptate, commodi omnis consequuntur molestias, inventore modi cumque repellendus voluptatum odio minus, et nostrum fugiat! Sint voluptates dolor similique!</p>
    </div>
  )
}

export default App
