import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseone =()=> setCounter(counter+1)
  const reset =()=> setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button  onClick={increaseone}> +add</button>
      <button  onClick={reset}>reset</button>;
    </div>
  );
};

export default App;
