import { useState } from "react";

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [selection, setSelection] = useState("");
  const [total, setTotal] = useState(0);


  const handleChange = (ev) => {
    setSelection(ev.target.value)
  };

  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  if(selection === "sumar"){
    setTotal(parseInt(numberA) + parseInt(numberB))
  }else if(selection === "restar"){
    setTotal(parseInt(numberA) - parseInt(numberB))

  }else if(selection === "multiplicar"){
    setTotal(parseInt(numberA) * parseInt(numberB))

  }else if(selection === "dividir"){
    setTotal(parseInt(numberA) / parseInt(numberB))
  }

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <select name="" id="" onChange={handleChange}>
          <option value="sumar">sumar</option>
          <option value="restar">restar</option>
          <option value="multiplicar">multiplicar</option>
          <option value="dividir">dividir</option>
        </select>
        <label>
          Escribe un número:
          <input
            type="number"
            name="name"
            onChange={handleNumberA}
            value={numberA}
          />
        </label>
        <label>
          Escribe otro número:
          <input
            type="number"
            name="email"
            onChange={handleNumberB}
            value={numberB}
          />
        </label>
      </form>
      <p>
        La suma de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {total}</strong>.
      </p>
    </div>
  );
};

export default App;