import PropTypes from "prop-types";

function InputGroupText(props) {
  return (
    <div className="input-group-text">
            <label className="label-text" htmlFor={props.inputId}>
              {props.labelText}
            </label>
            <input
              className="input-text"
              type="text"
              name={props.inputName}
              id={props.inputId}
              placeholder={props.inputPlaceholder}
              value={props.inputValue}
              onChange={props.handleName}
            />
          </div>
  )
}
InputGroupText.propTypes = {
    inputId: PropTypes.string,
    labelText: PropTypes.string,
    inputName: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputValue: PropTypes.string,
    handleName: PropTypes.func,
}

export default InputGroupText