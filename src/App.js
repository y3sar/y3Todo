import './App.css';
import TaskCard from './components/TaskCard';
import Draggable from 'react-draggable';
import TaskAdder from './components/TaskAdder';
import {useEffect, useState} from 'react'
import ProjectName from './components/ProjectName';

function App() {
  const [taskList, setTaskList] = useState({})
  const [popUpDisplay, setPopUpDisplay] = useState("none")

  useEffect(() => {
    setTimeout(() => {
      setPopUpDisplay("none")
    }, 1000)
  }, [popUpDisplay])

  function submitTask(taskName, taskDescription){

   const idx = Date.now();

    setTaskList((prevList) => ({
      ...prevList,
      [idx]: {
        taskName: taskName,
        taskDescription: taskDescription
      }
    }))
  }


  function removeTodo(id){
    setTaskList((prevList) => {
      delete prevList[id];
      return {...prevList}
    })
  }


  return (
    <div class="App-header">
      <ProjectName></ProjectName>
      <TaskAdder submitTask={submitTask} noInput={setPopUpDisplay}/>

      <div class="popup" style={{display:popUpDisplay}}>
        <p>Put in a TODO</p>
      </div>
      {
        Object.keys(taskList).map((id) => {
          return <Draggable>
                  <div>
                  <TaskCard key={id} id={id} taskName={taskList[id].taskName} 
                           taskDescription={taskList[id].taskDescription}
                           removeTodo={removeTodo}
                           />
                  </div>
                </Draggable>        })
      }
    </div>
  );
}

export default App;
