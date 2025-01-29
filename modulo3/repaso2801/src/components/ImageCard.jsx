import PropTypes from "prop-types"

function ImageCard({ flowerData }) {

    const {title, url} = flowerData //más destructuring de flowerData en este caso y luego no hace falta utilizar el objeto en sí abajo, id no es necesario porque no vamos a necesitarlo aquí
  return (
    <article>
        <img src={url} alt="" />
        <h3>{title}</h3>
    </article>
  )
}

ImageCard.propTypes={
    flowerData: PropTypes.object.isRequired //esto se pone si queremos poner que un dato es obligatorio
}
export default ImageCard