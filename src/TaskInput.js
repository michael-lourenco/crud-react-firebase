import React from 'react'
import firebase from './firebase'

export const TaskInput = ({task})=>{
  const [name, setName] = React.useState(task.name)

  const onUpdate =()=>{
    const db = firebase.firestore()
    db.collection('tasks').doc(task.id).set({...task, name})
  }
  const onDelete =()=>{
    const db = firebase.firestore()
    db.collection('tasks').doc(task.id).delete()
  }
  return (
  <>
      <input 
        value={name} 
        onChange={(e)=>{
          setName(e.target.value)
        }}
      />
      <button onClick={onUpdate}>Update</button>
      <button onClick={onDelete}>Delete</button>
  </>
  )
}