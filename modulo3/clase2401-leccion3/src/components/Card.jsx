
function Card(props) {
    console.log(props)
  return (
    <article>   
        <h3>Nombre: {props.data.name}</h3>
        <p>Poder: {props.data.power}</p>
        <small>Origen: {props.data.origin}</small>        
    </article>
  )
}

export default Card