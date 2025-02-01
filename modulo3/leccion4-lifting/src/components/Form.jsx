import InputGroupText from './InputGroupText';
import InputGroupSelect from './InputGroupSelect';
import InputGroupRadio from './InputGroupRadio';
import InputGroupCheck from './InputGroupCheck';
import Button from './Button';


function Form(props) {

    const handleForm = (ev) => {
        ev.preventDefault();
        props.handleFormSubmit();
      };
    
      // Funciones que nos ayudan a renderizar
      
    
      const isValidForm = () => {
        // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
        // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
        if (
          props.name !== "" &&
          props.email !== "" &&
          props.paymentType !== "" &&
          props.legalTerms === true
        ) {
          return true;
        } else {
          return false;
        }
      };
    
  return (
<form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          
          <InputGroupText labelText={"Escribe un nombre:"} inputName="name" inputId="name" inputPlaceholder={"María García"} inputValue={props.name} handleChange ={props.handleName}/>
          <InputGroupText labelText={"Escribe un email:"} inputName="email" inputId="email"inputPlaceholder={"mariagarcia@gmail.com"} inputValue={props.email} handleChange ={props.handleEmail}/>
          <InputGroupSelect labelText={"Indica tu región:"} selectName="region" selectId="region" selectValue={props.region} handleChange={props.handleRegion}/>

          
          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>
          <InputGroupRadio radioText="Tarjeta de crédito" radioName="paymentType" radioId="creditCard" radioValue="creditCard" inputValue={props.paymentType} handleChange={props.handlePaymentType}/>
          <InputGroupRadio radioText="Efectivo" radioId="cash" radioValue="cash" inputValue={props.paymentType} handleChange={props.handlePaymentType}/>
          <InputGroupRadio radioText="Contra reembolso" radioId="cashOnDelivery" radioValue="cashOnDelivery" inputValue={props.paymentType} handleChange={props.handlePaymentType}/>


          {/* legal terms */}
          <InputGroupCheck labelText={"Debes aceptar nuestros términos legales para completar la compra:"} inputName="legalTerms" inputId="legalTerms" inputValue={props.legalTerms} handleChange ={props.handleLegalTerms}/>

        </div>

        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <Button buttonText="Limpiar el formulario" handleResetButton={props.handleResetButton}/>
        <Button buttonText="Enviar" handleResetButton={props.handleResetButton}/>

        <input
          className="button"
          type="submit"
          value="Enviar"
          disabled={isValidForm() === false}
        />
        
      </form>  )
}

export default Form