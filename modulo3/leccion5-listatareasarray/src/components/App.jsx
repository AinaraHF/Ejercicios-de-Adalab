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
    if (!taskId) return; 
    const doneTask = tasks.findIndex((task)=> task.id === taskId);
    if(tasks[doneTask].completed === true){
      tasks[doneTask].completed = false;
    }else {
      tasks[doneTask].completed = true;
    }
  }

    const taskList = tasks.map((task, index)=>{
    return <li className={task.completed === true ? "completed" :""} id={index} onClick={handleClick}>{task.task}</li>
  })

  return (
    <>
    <h1>Mi lista de tareas</h1>
    <ol>{taskList}</ol>
    </>
  )
}

export default App
