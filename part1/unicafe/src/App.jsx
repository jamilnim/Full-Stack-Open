import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine =(props)=>(
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positivePercentage = (props.good / total) * 100;

  if (total === 0) {
    return <h2> "No feedback yet"</h2>;
  }
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average.toFixed(2)} />
        <StatisticLine text="positivePercentage" value={`${positivePercentage.toFixed(2)} %`} />
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Please give your feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Button
        handleClick={() => setGood(0) & setNeutral(0) & setBad(0)}
        text="Reset"
      />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
