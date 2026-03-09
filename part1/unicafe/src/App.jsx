import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / total;
  const positivePercentage = (props.good / total) * 100;

  if (total === 0) {
    return <h2> "No feedback yet"</h2>;
  }
  return (
    <div>
      <h1>Statistics</h1>
      <h2>Good:{props.good}</h2>
      <h2>Neutral:{props.neutral}</h2>
      <h2>Bad:{props.bad}</h2>
      <h3>Total: {total}</h3>

      <h3>Average: {average.toFixed(2)}</h3>

      <h3>Positive: {positivePercentage.toFixed(2)} %</h3>
    </div>
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
