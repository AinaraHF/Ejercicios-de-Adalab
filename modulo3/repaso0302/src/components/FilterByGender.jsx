
function FilterByGender({ setFilterGender }) {

    const handleSelect = (ev) =>{
      setFilterGender(ev.target.value)
    }

  return (
    <div>
      <select name="" id="" onChange={handleSelect}>
        <option value="">Seleccione</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </div>
  )
}

export default FilterByGender