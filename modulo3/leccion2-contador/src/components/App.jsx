import {useState} from 'react';

function App() {
  
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter+1);
  }

  const handleDecrease = () => {
    setCounter(counter-1);
  }

  const handleReset = () => {
    setCounter(0);
  }
  return (
    <>
    <h1>Contador</h1>
    <p>Contador: {counter}</p>
    <button onClick={handleIncrease}>Incrementar contador</button>
    <button onClick={handleDecrease}>Reducir contador</button>
    <button onClick={handleReset}>Resetear contador</button>
    </>
    
  )
}

export default App
