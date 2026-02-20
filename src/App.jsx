import { useState } from 'react'

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = ({title, value}) => {
  return (
    <p>{title} {value}</p>
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
      <Statistics title='good' value={good} />
      <Statistics title='neutral' value={neutral} />
      <Statistics title='bad' value={bad} />
      <Statistics title='total reviews' value={allClicks} />
      <Statistics title='average' value={((good - bad) / allClicks)} />
      <Statistics title='positive' value={(good / allClicks) * 100} />
    </>
  )
}

export default App
