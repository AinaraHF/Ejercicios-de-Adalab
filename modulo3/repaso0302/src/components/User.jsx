import { Link } from "react-router-dom"

function User({ info }) {
  return (
    <article>
      <Link to={`/person/${info.id}`}>
        <img src={info.img} alt="" /> 
        <p>{info.name}</p>
        <p>{info.city}</p>
      </Link>
    </article>
  )
}

export default User