
function Counter() {

    const [count, setCount] = useState(0)

    const handleSuma = () =>{
        setCount(count+1)
    }

    const handleResta = () =>{
        setCount(count-1)
    }

  return (

    <div>
        <button onClick={handleSuma}>Incrementar</button>
        <button onClick={handleResta}>Disminuir</button>
        <p>
            Contador: {count}
        </p>    
    </div>
  )
}

export default Counter