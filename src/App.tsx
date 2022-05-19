import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Column from './components/Column';
import { useDrag, DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { useAppSelector, useAppDispatch } from './state/hooks'

import { add, remove } from './state/slices/cardSlice'

function App() {
  // const [columns, setColumns] = useState(['Backlog',  'In Progress', 'Done'])
  const columns = useAppSelector((state) => state.columns.columns)
  const cards = useAppSelector((state) => state.cards.cards)
  const dispatch = useAppDispatch()

  // console.log(cards)

  return (
    <div className="pt-8">
      <button onClick={() => dispatch(add())}>CLick</button>
      <button onClick={() => dispatch(remove())}>remove</button>
      <div className="flex">
        {columns.map((column: Column) => {
          const columnCards = cards.filter((card: Card) => card.columnId === column.id)
          return (
            <Column column={column} cards={columnCards}/>
          )
        })}
      </div>
    </div>
  );
}

export default App;
