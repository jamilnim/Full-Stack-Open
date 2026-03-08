import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

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
      <Button handleClick={() => setGood(0) & setNeutral(0) & setBad(0)} text="Reset" />
      
    <div><h2>Good: {good}</h2></div>
    <div><h2>Neutral: {neutral}</h2></div>
    <div><h2>Bad: {bad}</h2></div>

    </div>
  );
};

export default App;
