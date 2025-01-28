import PropTypes from "prop-types";

function Preview(props) {
  return (
    <div className="preview">
          <h2>Tus datos son:</h2>
          <ul>
            <li>Nombre: {props.name}</li>
            <li>Email: {props.email}</li>
            <li>Región: {props.region}</li>
            <li>Método de pago: {props.renderPaymentTypeText}</li>
            <li>
              Has aceptado nuestros términos legales:{" "}
              {props.legalTerms === true ? "Sí" : "No"}
            </li>
          </ul>
        </div>
  )
}

Preview.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    region: PropTypes.string,
    renderPaymentTypeText: PropTypes.func,
    legalTerms: PropTypes.bool,
}
export default Preview