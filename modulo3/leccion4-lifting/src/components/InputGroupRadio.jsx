
function InputGroupRadio(props) {

    const handleRadio =(ev)=>{
       props.handleChange(ev.target.value)
    }

  return (
    <>
        <div className="input-group-radio">
        <label className="label-radio" htmlFor={props.radioId}>
        {props.radioText}</label>
  {/* Este radio solo debe aparecer activo cuando paymentType sea creditCard */}
        <input
        type="radio"
    name={props.radioName}
    id={props.radioId}
    value={props.radioValue}
    checked={props.radioValue === props.inputValue}
        onChange={handleRadio}/>    
        </div>

    </>  
)
}

export default InputGroupRadio