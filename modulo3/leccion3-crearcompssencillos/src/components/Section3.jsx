import '../styles/Section3.scss';
import backpack from "../images/lpbts-mod05-img01-desk.png";
import pencilcase from "../images/lpbts-mod05-img04-mob.png";
import sportsbag from "../images/lpbts-mod05-img03-mob.png";

function Section3() {
  return (
    <section className="section3" id="section3">
    <h4 className="section3_title">¡Prepáralos con tus marcas favoritas!</h4>
    <h2 className="section3_title2">VUELTA AL COLE</h2>
    <div className="products">
        <article>
            <img src={backpack} alt="girl with backpack" className="products_img"/>
            <p className="products_text">Mochilas escolares</p>
        </article>
        <article>
            <img src={pencilcase} alt="boy with pencil case" className="products_img"/>
            <p className="products_text">Estuches</p>
        </article>
        <article>
            <img src={sportsbag} alt="girl with sportsbag" className="products_img"/>
            <p className="products_text">Bolsas de deporte</p>
        </article>
    </div>
    <button className="begin">Empezar ahora</button>
</section>
  )
}

export default Section3