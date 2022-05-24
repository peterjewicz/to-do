import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Column from './components/Column';
import AddTask from './components/AddTask';
import { useDrag, DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { API_URL } from './constants';

import { useAppSelector, useAppDispatch } from './state/hooks'

import { set, remove } from './state/slices/cardSlice'

function App() {
  // const [columns, setColumns] = useState(['Backlog',  'In Progress', 'Done'])
  const columns = useAppSelector((state) => state.columns.columns)
  const cards = useAppSelector((state) => state.cards.cards)
  const dispatch = useAppDispatch()

  const [data, setData] = useState(false)


  const getInitialData = async (): Promise<void> => {
    if (!data) {
      setData(true)
      const res = await fetch(`${API_URL}/tasks`, {
          headers: {
            'Content-Type':'application/json'
          },
          method: "get",
          mode: 'cors',
        })
        .then(function(response) {
          return response.json()
        });

        if (res) {
          console.log(res)
          dispatch(set(res))
        }
    }
  }


  getInitialData();



  return (
    <div className="pt-8">
      <button onClick={() => dispatch(remove())}>remove</button>
      <AddTask />
      <div className="flex">
        {columns.map((column: Column) => {
          const columnCards = cards.filter((card: Card) => card.date === column.name)
          return (
            <Column column={column} cards={columnCards}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
