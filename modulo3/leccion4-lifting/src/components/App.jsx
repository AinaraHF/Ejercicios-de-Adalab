
// Fichero src/components/App.jsx
import { useState } from "react";
import Preview from "./Preview";
import InputGroupText from "./InputGroupText";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupCheck from "./InputGroupCheck";
import Button from "./Button";

const App = () => {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (value) => {
      setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (checked) => {
    // Como lo que nos interesa es si está activo o no, guardamos el checked
    setLegalTerms(checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Enviando datos al servidor...");
  };

  // Funciones que nos ayudan a renderizar
  

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== "" &&
      email !== "" &&
      paymentType !== "" &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          
          <InputGroupText labelText={"Escribe un nombre:"} inputName="name" inputId="name" inputPlaceholder={"María García"} inputValue={name} handleChange ={handleName}/>
          <InputGroupText labelText={"Escribe un email:"} inputName="email" inputId="email"inputPlaceholder={"mariagarcia@gmail.com"} inputValue={email} handleChange ={handleEmail}/>
          <InputGroupSelect labelText={"Indica tu región:"} selectName="region" selectId="region" selectValue={region} handleChange={handleRegion}/>

          
          {/* payment type */}
          <label className="label-text">Indica tu método de pago:</label>
          <InputGroupRadio radioText="Tarjeta de crédito" radioName="paymentType" radioId="creditCard" radioValue="creditCard" inputValue={paymentType} handleChange={handlePaymentType}/>
          <InputGroupRadio radioText="Efectivo" radioId="cash" radioValue="cash" inputValue={paymentType} handleChange={handlePaymentType}/>
          <InputGroupRadio radioText="Contra reembolso" radioId="cashOnDelivery" radioValue="cashOnDelivery" inputValue={paymentType} handleChange={handlePaymentType}/>


          {/* legal terms */}
          <InputGroupCheck labelText={"Debes aceptar nuestros términos legales para completar la compra:"} inputName="legalTerms" inputId="legalTerms" inputValue={legalTerms} handleChange ={handleLegalTerms}/>

        </div>

        <Preview name={name} email={email} region={region} paymentType={paymentType} legalTerms={legalTerms}/>

        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}
        <Button buttonText="Limpiar el formulario" handleResetButton={handleResetButton}/>
        <Button buttonText="Enviar" handleResetButton={handleResetButton}/>

        <input
          className="button"
          type="submit"
          value="Enviar"
          disabled={isValidForm() === false}
        />

        {/* send */}
        
      </form>
    </div>
  );
};

export default App;