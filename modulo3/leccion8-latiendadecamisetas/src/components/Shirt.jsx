
function Shirt({ data }) {

  return (
    <li>
        <img src={data.imageUrl} alt="" />
        <h3>{data.name}</h3>
        <p>{data.price}</p>
    </li>
  )
}

export default Shirt