
function User({ info }) {
  return (
    <article>
      <img src={info.img} alt="" /> 
      <p>{info.name}</p>
      <p>{info.city}</p>
    </article>
  )
}

export default User