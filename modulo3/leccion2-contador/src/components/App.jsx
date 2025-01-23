import {useState} from 'react';

function App() {
  
  const [count, setCount] = useState('');

  const handleIncrease = () => {
     setCount(count++);
  }

  const handleDecrease = () => {

  }

  const handleReset = () => {

  }
  return (
    <>
    <h1>Contador</h1>
    <p>Contador: <span>0{count}</span></p>
    <button onClick={handleIncrease}>Incrementar contador</button>
    <button onClick={handleDecrease}>Reducir contador</button>
    <button onClick={handleReset}>Resetear contador</button>
    </>
    
  )
}

export default App
