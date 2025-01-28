

function Product({ item }) { //hemos llamado item a la prop en ListProducts
  return (
    <article>
        <img src={item.image} alt="" />
        <h2>{item.title}</h2>
        <p>{item.price}</p>
    </article>
  )
}

export default Product