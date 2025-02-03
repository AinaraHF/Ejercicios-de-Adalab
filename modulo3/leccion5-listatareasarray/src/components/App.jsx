import { useState } from "react";
import "../styles/App.css";

function App() {
  
  const [tasks, setTasks] = useState([
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    { task: "Comerme las croquetas mirando a la gente que entra en el gimnasio", completed: false },
  ]);

  const handleClick = (ev) =>{
    const taskId = parseInt(ev.target.id);
    if(tasks[taskId].completed){
      setTasks({...tasks, completed:false})
    }else {
      setTasks({...tasks, completed:true})
    }
  }

   return (
    <>
    <h1>Mi lista de tareas</h1>
    <ol>{tasks.map((task, index)=>(
     <li key={index} className={task.completed ? "completed" :""} id={index} onClick={handleClick}>{task.task}</li>
    ))}</ol>
    </>
  )
}

export default App
