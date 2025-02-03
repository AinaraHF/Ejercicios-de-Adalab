import { Route, Routes } from "react-router-dom"
import Overview from "../components/Overview"
import Repositories from "../components/Repositories"
import Packages from "../components/Packages"
import People from "../components/People"
import Teams from "../components/Teams"
import Projects from "../components/Projects"
import Settings from "../components/Settings"
import Menu from "./Menu"

function App() {
  

  return (
    <>
    <header>
      <Menu/>
      <Routes>
        <Route path="/" element={<Overview/>}/>  
        <Route path="/repositories" element={<Repositories/>}/>  
        <Route path="/packages" element={<Packages/>}/>  
        <Route path="/people" element={<People/>}/>  
        <Route path="/teams" element={<Teams/>}/>  
        <Route path="/projects" element={<Projects/>}/>  
        <Route path="/settings" element={<Settings/>}/> 
      </Routes>      
    </header>
    
    </>
  )
}

export default App
