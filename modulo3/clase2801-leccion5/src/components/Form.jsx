

function Form(props) {

    const handleInput =(ev)=>{
        props.setSearch(ev.target.value.toLowerCase()) //cojo value del input, lo guardo en la variable y lo paso a minusculas
    }

  return (
    <form>
        <input type="text" name="" id="" placeholder="Indica nombre" onChange={handleInput}/>
    </form>
  )
}

export default Form