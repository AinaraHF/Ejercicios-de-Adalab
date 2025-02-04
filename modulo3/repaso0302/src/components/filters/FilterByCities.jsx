
function FilterByCities({ citiesList, changeFilterCities }) {

    const handleChange = (ev) =>{
        changeFilterCities(ev.target.value)
    }

  return (
    <div>
        {citiesList.map(city=> <label htmlFor="" key={city}>
            <input type="checkbox" value={city} onChange={handleChange}/>
            {city}
        </label>)}
    </div>
  )
}

export default FilterByCities