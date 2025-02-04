
function FilterByGender({ setFilterGender, filterGender }) {

    const handleSelect = (ev) =>{
      setFilterGender(ev.target.value)
    }

  return (
    <div>
      <select value={filterGender} onChange={handleSelect}>
        <option value="">Seleccione</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </div>
  )
}

export default FilterByGender