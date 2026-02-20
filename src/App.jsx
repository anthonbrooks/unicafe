import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad, allClicks}) => {
  if (!(good || neutral || bad)) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='total reviews' value={allClicks} />
          <StatisticLine text='average' value={((good - bad) / allClicks)} />
          <StatisticLine text='positive' value={(good / allClicks) * 100} /> 
        </tbody>
      </table>
    </div>
  )
}

function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState(0);

  const handleGoodClick = () => {
    setAll(allClicks + 1);
    setGood(good + 1);
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 1);
    setNeutral(neutral + 1);
  }

  const handleBadClick = () => {
    setAll(allClicks + 1);
    setBad(bad + 1);
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />

      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} />
    </>
  )
}

export default App
