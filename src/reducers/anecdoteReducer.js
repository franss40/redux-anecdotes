import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({
  name: "anecdote",
  initialState,
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push(content)
      return state
    },
    addVote(state, action) {
      const changeAnecdote = action.payload
      return state.map(anecdote => anecdote.id === changeAnecdote.id ? changeAnecdote : anecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { createAnecdote, addVote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNew = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)
    dispatch(createAnecdote(newAnecdote))
  }
}

export const addVoteAnecdote = anecdote => {
  return async dispatch => {
    const updateAnecdote = await anecdoteService.update(anecdote.id, anecdote)
    dispatch(addVote(updateAnecdote))
  }
}

export default anecdoteSlice.reducer
