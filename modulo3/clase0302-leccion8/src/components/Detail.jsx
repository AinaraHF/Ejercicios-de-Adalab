import { useParams } from "react-router-dom"

function Detail({ getInfo }) {
  
  //const info = useParams
  //si hacemos console.log (info) nos aparece, position:X en la consola, también podemos si queremos hacer destructuring aquí de la siguiente forma
  //const {position} = useParams y si hacemos console.log(position ya solo nos aparece el número, NO position:X)
  
  const { position } = useParams()
  const data = getInfo(position)

  return (
    <article>
      <img src={data.image} alt=""/>
      <h3>{data.name}</h3>
      <p>{data.location.province}</p>
      <p>{data.species}</p>
    </article>
  )
}

export default Detail
