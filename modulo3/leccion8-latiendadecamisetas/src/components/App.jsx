import { useEffect, useState } from "react"
import api from "../api"
import ShirtList from "./ShirtList"

function App() {
  
  const [shirts, setShirts] = useState("")

  useEffect(()=>{
    api().then((data) => {setShirts(data)})
}, [])


  return (
    <>
      <h1>Tienda camisetas</h1>
      <ShirtList info={shirts}/>
    </>
  )
}

export default App
