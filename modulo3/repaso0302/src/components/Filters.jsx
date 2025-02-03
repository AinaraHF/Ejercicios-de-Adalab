import FilterByName from "./FilterByName"
import FilterByGender from "./FilterByGender"

function Filters({ setFilterName, setFilterGender }) {

    const handleForm = (ev) =>{
        ev.preventDefault()
    }

  return (
    <form onSubmit={handleForm}>
        <FilterByName setFilterName={setFilterName}/>
        <FilterByGender setFilterGender={setFilterGender}/>
    </form>
  )
}

export default Filters