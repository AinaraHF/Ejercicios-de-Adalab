
function App() {
  
  const handleInput = (ev) => {
      console.log("La última tecla pulsada es: ", ev.key);
  }

  return (
    <>
      <form action="">
        <label htmlFor="name">Escribe aquí tu nombre</label>
        <input type="text" id="name" onKeyUp={handleInput}/>
      </form>
    </>
  )
}

export default App
