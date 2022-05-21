import React, { useState } from 'react';
import { API_URL } from '../constants';
import { useAppDispatch } from '../state/hooks'
import { add } from '../state/slices/cardSlice'

const AddTask = () => {
  const dispatch = useAppDispatch()
  const [name, setName] = useState("");
  const [minutes, setminutes] = useState(0);

  const saveTask = async (): Promise<void> => {

    const res = await fetch(`${API_URL}/tasks`, {
      headers: {
        'Content-Type':'application/json'
      },
      method: "post",
      mode: 'cors',
      body: JSON.stringify({name: name, minutes: minutes, columnId: 1})
    })
    .then(function(response) {
      return response.json()
    });

    if (res) {
      dispatch(add(res))
    }
  }


  // TODO make minutes a number field - this is fine for testing
  return (
    <div>
      <h5>Add Task</h5>
      <input type="text" value={name} placeholder="Name" onChange={(e: any) => setName(e.target.value)} />
      <input type="text" value={minutes} placeholder="minutes" onChange={(e: any) => setminutes(parseInt(e.target.value))} />
      <button onClick={saveTask}>Save</button>
    </div>
  )
}

export default AddTask;
