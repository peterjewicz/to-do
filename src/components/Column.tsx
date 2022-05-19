import React from 'react';
import Card from './Card';
import { useDrag, DndProvider, useDrop } from 'react-dnd';
import { ItemTypes } from '../constants';
import { useAppDispatch } from '../state/hooks'
import { moveBoard } from '../state/slices/cardSlice'

interface ColumnProps {
  column: Column;
  cards: Card[]
}

const Column = ({column, cards}: ColumnProps) => {
  const dispatch = useAppDispatch()

  const [, drop] = useDrop({
      accept: ItemTypes.CARD,
      drop: (card: Card) =>  {
        dispatch((moveBoard({cardId: card.id, columnId: column.id})))
      }
  })

  return (
    <div ref={drop} className="mx-8" style={{width: "200px", border: "1px solid black", minHeight: "300px"}}>
      <h3>{ column.name }</h3>
      <div>
        {cards.map((card: Card) => {
          return (<Card card={card}/>)
        })

        }
      </div>
    </div>
  )
}


export default Column;
