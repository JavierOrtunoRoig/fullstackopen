import React, { useState } from 'react'
import ReactDOM from 'react-dom'


export const Header = ({title}) => <h1>{title}</h1>

export const Winner = ({anecdotes, votes}) => <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>


const App = (props) => {

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0));

  const getRandomInt = (min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleVote = ({anecdotes}) => {
    const newAllVotes = [...votes]
    newAllVotes[selected] += 1
    setVotes(newAllVotes)
  }

  return (
    <div>
      <Header title="Anecdote of the day" />
      {anecdotes[selected]}
      <p>Has {votes[selected]} votes</p>
      <button onClick={() => setSelected(getRandomInt(0, anecdotes.length - 1))}>Next anecdote</button>
      <button onClick={handleVote}>Vote</button>

      <Header title="Anecdote with most votes" />
      <Winner anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)