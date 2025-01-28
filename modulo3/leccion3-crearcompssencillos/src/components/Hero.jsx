import "../styles/Hero.scss"
import scroll from "../images/ico-scroll-down.svg";

function Hero() {
  return (
    <section className="hero" id="hero">
    <h1 className="hero_title"><span>COMIENZOS</span> COMPARTIDOS</h1>
    <h4 className="hero_subtitle"><span>Todo lo que necesitan para volver</span> al cole con ilusión</h4>
    <a href="#section3">
        <img src={scroll} alt="arrowdown" className="arrowdown"/>
    </a>
</section>
  )
}

export default Hero