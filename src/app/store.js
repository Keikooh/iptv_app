import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './features/movies/moviesSlice'

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
})