

function DogData(props) {
  return (
        <article className= {props.visibility}>
            <img src={props.dog.url} alt="" />
            <h2>{props.dog.name}</h2>
        </article>
  )
}

/*DESTRUCTURING
las props son dog, text, handleAlgo
function DogData({dog, text, handleAlgo}) {
  //con las llaves {} es con lo que hacemos el destructuring
  const {name, url} = dog;
  return (
        <article>
            <img src={dog.url} alt="" />
            <h2>{dog.name}</h2>
        </article>
  )
}*/

export default DogData