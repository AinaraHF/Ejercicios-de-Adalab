
// Fichero src/components/App.jsx
import { useState } from "react";
import Preview from "./Preview";
import InputGroupText from "./InputGroupText";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupCheck from "./InputGroupCheck";
import Button from "./Button";
import Form from "./Form";

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

  const handleForm = () => {
    console.log('Enviando datos al servidor...');
  };

  const handleResetButton = () => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  
  return (
    <div>
      <Form name={name} handleName={handleName} email={email} handleEmail={handleEmail} region={region} handleRegion={handleRegion} paymentType={paymentType} handlePaymentType={handlePaymentType} legalTerms={legalTerms} handleLegalTerms={handleLegalTerms} handleResetButton={handleResetButton} handleFormSubmit={handleForm}/>

      <Preview name={name} email={email} region={region} paymentType={paymentType} legalTerms={legalTerms}/>
    </div>
  );
};

export default App;