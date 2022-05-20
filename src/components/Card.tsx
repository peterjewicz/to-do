import React from 'react';
import { useDrag, DndProvider, useDrop } from 'react-dnd'
import { useAppDispatch } from '../state/hooks'
import { moveBoard } from '../state/slices/cardSlice'

import { ItemTypes } from '../constants';

interface CardProps {
  card: Card;
}

const Card = ({ card }: CardProps) => {

  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: card,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div className="border" ref={drag}>
      <h3>{ card.name }</h3>
      <p>Time { card.minutes }</p>
    </div>
  )
}

export default Card;
