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

const calcTotalTime = (cards: Card[]): number => {
  return cards.reduce((acc: number, card: Card) => acc + card.minutes, 0);
}

const formatHoursMinutes = (time: number): string => {
  const minutesVal = `${time % 60}`;
  const minutesDisplay = minutesVal.length === 1 ? `0${minutesVal}` : minutesVal;
  return `${Math.floor(time / 60)}:${minutesDisplay}`;
}

const Column = ({column, cards}: ColumnProps) => {
  const dispatch = useAppDispatch()
  const totalTime = formatHoursMinutes(calcTotalTime(cards));

  const [, drop] = useDrop({
      accept: ItemTypes.CARD,
      drop: (card: Card) =>  {
        dispatch((moveBoard({cardId: card.id, columnId: column.name})))
      }
  })

  return (
    <div ref={drop} className="mx-8" style={{width: "200px", border: "1px solid black", minHeight: "300px"}}>
      <h3>{ column.name }</h3>
      <p>Total Time: { totalTime }</p>
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
