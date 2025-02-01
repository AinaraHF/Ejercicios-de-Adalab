import "../styles/Tooltip.css"

function Tooltip(props) {

 return (
    <div className="tooltip">
    <span className="tooltipicon">?</span>
    <p className="tooltiptext">{props.children}</p>
    </div>
  )
}

export default Tooltip