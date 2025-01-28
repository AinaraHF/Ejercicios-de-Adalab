import Product from "./Product"


function ListProducts({ list }) { //list, nombre prop, usamos destructuring
  
  const productsHTML = list.map((item)=><li key={item.id}> <Product item={item}/> </li>)
  
  return (
    <section>
        <ul>
            {productsHTML}
        </ul>
    </section>
  )
}

export default ListProducts