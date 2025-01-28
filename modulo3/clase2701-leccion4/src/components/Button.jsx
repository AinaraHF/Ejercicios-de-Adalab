

function Button(props) {
  //props.changeDog()
  //objetivo es que cuando click botón se ejecute changeDog()

  const handleClick = (ev) => {
    ev.preventDefault();
    props.setVisibility("");
  }
  return (
        <button onClick={handleClick}>Añadir perrito</button>
  )
}

export default Button