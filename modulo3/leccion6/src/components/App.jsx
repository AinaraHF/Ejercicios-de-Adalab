import { useState } from "react"

function App() {
  
  const [text, setText] = useState ("")
  
  const regex = /[aeou]/g

    const handleChange = (ev) => {
      setText(ev.target.value.replace(regex, "i"))

}

  return (
   
    <div>
      <h1>Traductor Mimimi</h1>
      <p>{text}</p>
      <textarea name="" id="" rows="8" cols="50" onChange={handleChange}></textarea>    
    </div>
  );
};

export default App;
 
