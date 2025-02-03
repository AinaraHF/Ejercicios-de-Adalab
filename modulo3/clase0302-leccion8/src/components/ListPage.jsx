import { Link } from "react-router-dom"

function ListPage({pets}) {
  return (
    <div>
      <h2>Listado de mascotas</h2>
      {pets.map((item, i) => <article key={i}>
        <Link to={`/pet/${i}`}>
            <img src={item.image} alt="" className="imageList"/>
            <h4>{item.name}</h4>
        </Link>
      </article>)}
    </div>
  )
}

export default ListPage
