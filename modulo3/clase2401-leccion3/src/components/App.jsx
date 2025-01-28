import Header from "../components/Header";
import Card from "../components/Card";

function App() {
  
  const heroe = {
    name: "Mujer maravilla",
    power: 800,
    origin: "EEUU"
  }
  const heroe2 = {
    name: "thor",
    power: 700,
    origin: "asgar"
  }
  
  const listHeroe = [
    {
      name: "Viuda negra",
      power: 500,
      origin: "EEUU"
    },
    {
      name: "Wanda",
      power: 900,
      origin: "EEUU"
    }, 
  ]

  return (
    <>
    <h1>Lista héroes</h1>
    <Header/>
    <Card data ={heroe} texto="valor"/>
    <Card data ={heroe2}/>
    {listHeroe.map((item) => <Card data ={item}/>)}
    </>
  )
}

export default App
