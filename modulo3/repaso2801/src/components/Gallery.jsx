import ImageCard from "./ImageCard";
import PropTypes from "prop-types"


function Gallery({ flowerList }) {
    //si pusieramos props, esto implica props=flowerList:[], es decir props.flowerList y lo que queramos acceder
  
const flowerItemsHtml = flowerList.map(item => {  return <ImageCard key={item.id} flowerData={item}/>})

  return (
    <section>
        {flowerItemsHtml}
    </section>
  )
}

Gallery.propTypes={
    flowerList: PropTypes.array
}
export default Gallery