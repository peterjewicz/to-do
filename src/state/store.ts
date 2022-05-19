import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './slices/cardSlice'
import columnReducer from './slices/columnSlice'

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    columns: columnReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
