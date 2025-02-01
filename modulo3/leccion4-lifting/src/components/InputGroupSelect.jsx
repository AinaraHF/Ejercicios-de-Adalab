
function InputGroupSelect(props) {

    const handleSelectChange = (ev) => {
        props.handleChange(ev.target.value)
    }

  return (
    <div className="input-group-select">
            <label className="label-text" htmlFor="region">
              {props.labelText}
            </label>
            <select
              className="input-select"
              name={props.selectName}
              id={props.selectId}
              value={props.region}
              onChange={handleSelectChange}
            >
              <option>España peninsular</option>
              <option>Islas Canarias</option>
              <option>Islas Baleares</option>
              <option>Ceuta</option>
              <option>Melilla</option>
            </select>
          </div>
  )
}

export default InputGroupSelect