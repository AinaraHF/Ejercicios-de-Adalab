

function Filter({ changeSearch }) {

    const handleInput = (ev) =>{
        // lifting --> subiendo a App los datos del input
        changeSearch(ev.target.value)

    }
  return (
    <form>
        <input type="text" onChange={handleInput}/>
    </form>  )
}

export default Filter