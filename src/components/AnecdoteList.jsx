import { useSelector, useDispatch } from "react-redux"
import { addVoteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

function filterAnecdote(anecdote, filter) {
  if (anecdote.content.toUpperCase().indexOf(filter.toUpperCase()) !== -1) {
    return anecdote
  }
}

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === '') {
      return [...anecdotes].sort((a,b) => b.votes - a.votes)
    }
    const anecdotesNotFilter = anecdotes.filter(anecdote => filterAnecdote(anecdote, filter))
    return anecdotesNotFilter.sort((a,b) => b.votes - a.votes)
  })

  const updateVote = id => {
    const anecdoteToChange = anecdotes.find((anecdote) => anecdote.id === id)
    const changeAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1,
    }    

    dispatch(addVoteAnecdote(changeAnecdote))
    dispatch(setNotification('One vote has been added', 5000))
  }

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => updateVote(anecdote.id)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
