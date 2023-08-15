import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value} {props.text2}
    </div>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad
  if (all === 0)
  return (
    <div>
      No feedback given
    </div>
)
  else return (
    <table>
        <tr>
          <td><StatisticLine text="good"/></td>
          <td><StatisticLine value={props.good} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="neutral"/></td>
          <td><StatisticLine value={props.neutral} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="bad"/></td>
          <td><StatisticLine value={props.bad} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="all"/></td>
          <td><StatisticLine value={all} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="average"/></td>
          <td><StatisticLine value={((props.good - props.bad)/all).toFixed(1)} /></td>
        </tr>
        <tr>
          <td><StatisticLine text="positive"/></td>
          <td><StatisticLine value={(props.good / all * 100).toFixed(1)} text2="%" /></td>
        </tr>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div> 
  )
}

export default App
