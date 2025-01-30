import { useState } from "react"

function Otroejer() {

 const initial_state = {
    name: "", //los id´s de los inputs los pongo con el mismo nombre que los datos del objeto
    hair: "",
    type: "",
    child: null, //booleano, pero al cargar la página no está definido, asi que usamos null
    city: []
 }

 const [data, setData] = useState(initial_state) //initial_state es un objeto, creamos una variable con los datos arriba

 const handleChange = (ev) => {
    const id = ev.target.id;
    const value = ev.target.value;

    // if(id === "name") {
    //     setData({...data, name:value})
    // }else if(id === "hair") {
    //     setData({...data, hair:value})
    // }else {
    //     setData({...data, type:value})
    // }
    setData({...data, [id]:value}) //condicional está bien, pero si son muchas cosas escribimos demasiadas líneas de código, es mejor así más genérico
}

 const handleRadio = (ev) =>{
    const response = ev.target.value === "si" ? true : false; //podemos hacer un ternario directamente porque solo hay dos tipos de respuesta
    setData({...data, child: response})
 }

 const handleReset = () =>{
    setData(initial_state) // con esto reseteamos todo, pero tenemos que añadirle value={data.name} o checked={data.child === true} a radio
 }

 const handleCheckbox = (ev) => {
    const checked = ev.target.checked
    const value =ev.target.value // con esto nos indica cuál es clicado

    if(checked){
        setData({...data, city: [...data.city, value]}) //como es un array, hacemos otro spread operator 
    }else{
        const cloneArray = [...data.city]
        const position = cloneArray.indexOf(value)
        cloneArray.splice(position, 1)
        setData({...data, city: cloneArray})
    }
 }

 const handleForm = (ev) => { 
    ev.preventDefault() 
 }

  return (
    <>
       <form onSubmit={handleForm}>
            <div>
                <input type="text" placeholder="Nombre" id="name" onChange={handleChange} value={data.name}/>
            </div>
            <div>
                <input type="text" placeholder="Color pelo" id="hair" onChange={handleChange} value={data.hair}/>
            </div>
            <div>
                <label>Tipo de mascota</label>
                <select name="" id="type" onChange={handleChange} value={data.type}>
                    <option value="">Seleccione</option>
                    <option value="perro">Perro</option>
                    <option value="gato">Gato</option>
                    <option value="ave">Ave</option>
                </select>
            </div>
            <div>
                <label>Tipo hijos la mascota</label>
                <input type="radio" name="child" value="si" onChange={handleRadio} checked={data.child === true}/>SI
                <input type="radio" name="child" value="no" onChange={handleRadio} checked={data.child === false}/>NO
            </div>
            <div>
                <label>Ciudades donde ha vivido la mascota</label>
                <input type="checkbox" name="city" id="city1" value="Zaragoza" onChange={handleCheckbox} checked={data.city.includes("Zaragoza")}/>Zaragoza
                <input type="checkbox" name="city" id="city2" value="Madrid" onChange={handleCheckbox} checked={data.city.includes("Madrid")}/>Madrid
                <input type="checkbox" name="city" id="city3" value="Valencia" onChange={handleCheckbox} checked={data.city.includes("Valencia")}/>Valencia
                <input type="checkbox" name="city" id="city4" value="Bilbao" onChange={handleCheckbox} checked={data.city.includes("Bilbao")}/>Bilbao
            </div>
          <button>aceptar</button>
          <button onClick={handleReset}>reset</button>
       </form>
    </>
  )
}

export default Otroejer