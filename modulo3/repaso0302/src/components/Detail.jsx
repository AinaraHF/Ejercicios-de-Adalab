
function Detail({ data }) {

  return (
    <div>
        <h2>{data.name}</h2>
        <img src={data.img} alt="" />
        <p>{data.city}</p>
        <p>{data.gender}</p>
        <p>{data.phone}</p>
        <p>{data.email}</p>
    </div>
  )
}

export default Detail