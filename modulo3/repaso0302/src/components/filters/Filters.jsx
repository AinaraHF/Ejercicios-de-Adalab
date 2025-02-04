import FilterByName from "./FilterByName"
import FilterByGender from "./FilterByGender"
import FilterByCities from "./FilterByCities"

function Filters({ setFilterName, setFilterGender, filterName, filterGender, cities, changeFilterCities }) {

    const handleForm = (ev) =>{
        ev.preventDefault()
    }

  return (
    <form onSubmit={handleForm}>
        <FilterByName setFilterName={setFilterName} filterName={filterName}/>
        <FilterByGender setFilterGender={setFilterGender} filterGender={filterGender}/>
        <FilterByCities citiesList={cities} changeFilterCities={changeFilterCities}/>
    </form>
  )
}

export default Filters