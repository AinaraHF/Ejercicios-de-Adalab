import "../styles/App.scss";
import graduation from "../images/fondogradu.jpg";

function App() {
  //js --> funciones, condicionales, def var, console.log()
  const promo = "Promo Brenda";

  return (
    <>
    <h1>Web React</h1>
    <section>
      <h2>Bienvenida {promo}</h2>
      <img src={graduation} alt="" className="image"/>
    </section>
    
    
    
    
    </>
    
  )
}

export default App
