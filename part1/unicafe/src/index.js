import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}


export const Statistics = ({ good, neutral, bad }) => {
  
  const total = good + neutral + bad;

  

  const average = (good, bad) => total === 0 ? 0 : ((good - bad) / total)
  const positive = (good) => total === 0 ? 0 : (good * (100 / total))

  return (
    total === 0 
    ? <p>No feedback given</p> 
    : <table border="1">
        <tbody>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="Total" value={total} />
          <Statistic text="Average" value={average(good, bad)} />
          <Statistic text="Positive" value={positive(good)} />
        </tbody>
      </table>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(v => v + 1)}>Good</button>
      <button onClick={() => setNeutral(v => v + 1)}>Neutral</button>
      <button onClick={() => setBad(v => v + 1)}>Bad</button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)