import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
interface CardState {
  cards: Card[]
}

interface MoveBoardAction {
  cardId: number;
  columnId: number;
}

// Define the initial state using that type
const initialState: CardState = {
  cards: []
}

export const cardSlice = createSlice({
  name: 'card',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Card[]>) => {
      state.cards = (action.payload);
    },
    add: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload);
    },
    remove: (state) => {
      state.cards.pop();
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    moveBoard: (state, action: PayloadAction<MoveBoardAction>) => {
      state.cards.map((card: Card) => {
        if (card.id === action.payload.cardId) {
          // return {...card, columnId: action.payload.columnId};
          return card.columnId = action.payload.columnId;
        } else {
          return card;
        }
      })
    },
  },
})

export const { add, remove, moveBoard, set } = cardSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const cardValue = (state: RootState) => state.cards

export default cardSlice.reducer
