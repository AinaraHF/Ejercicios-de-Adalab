
export default function Button(props) {

  return (
    <button className="button reset" onClick={props.handleResetButton}>
          {props.buttonText}
    </button>
  )
}
