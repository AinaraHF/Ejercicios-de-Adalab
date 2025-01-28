import Button from "./Button";

function Form(props) {

    const handleInput = (ev) => {
        const id = ev.target.id; //key
        const value = ev.target.value; //value, estas dos cosas son las que necesita la función changeDog(key, value)
        props.changeDog(id,value)
    }
  return (
        <form>
            <label htmlFor="">Nombre del perrito</label>
             <input type="text" id="nombre" onChange={handleInput}/> {/*cuando input, valor se guarda en ese momento, no después */}
            <label htmlFor="">Url de la imagen</label>
            <input type="text" id="url" onChange={handleInput}/>
            <Button setVisibility = {props.setVisibility}/>
        </form>
  )
}

export default Form