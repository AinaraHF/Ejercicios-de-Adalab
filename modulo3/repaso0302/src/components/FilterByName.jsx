
function FilterByName({setFilterName}) {

  const handleInput = (ev) =>{
    setFilterName(ev.target.value.toLowerCase()) //ya funciona, solo hace falta hacer el filtro en sí en APP
  }

  return (
    <div>
      <label htmlFor="">Nombre</label>
      <input type="text" onChange={handleInput}/>
    </div>
  )
}

export default FilterByName