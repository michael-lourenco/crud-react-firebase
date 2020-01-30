import React from 'react';
import './App.css';
import firebase from './firebase'
import {TaskInput} from './TaskInput'

function App() {
  const [tasks, setTasks] = React.useState([])
  const [newTaskName, setNewTaskName] = React.useState()

  React.useEffect(()=>{
    const db = firebase.firestore()
    return db.collection('tasks').onSnapshot((snapshot)=>{
      const tasksData = []
      snapshot.forEach(doc=>tasksData.push(({...doc.data(), id: doc.id})))
      setTasks(tasksData)
    })
  },[])

  const onCreate=()=>{
    const db = firebase.firestore()
    db.collection('tasks').add({name:newTaskName})
  } 

  return (
    <ul>
      <input value={newTaskName} onChange={(e)=>setNewTaskName(e.target.value)}/>
      <button onClick={onCreate}>Create</button>
     {tasks.map(task=>(
       <li key={task.name}>
         <TaskInput task={task}/>
       </li>
     ))}
   </ul>
  );
}

export default App;
