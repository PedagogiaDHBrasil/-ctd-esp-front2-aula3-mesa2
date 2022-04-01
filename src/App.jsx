import React from "react";
import useCounter from "./hooks/useCounter";
import Character from "./components/Character/index.tsx";

const App = () => {
  const [count, increment, decrement] = useCounter(0);

  return (
    <article className="App">
      <Character count={count} />
      <div>
        <h2>Contador = {count}</h2>
        <span>
          <button onClick={increment}>Incrementar</button>
          <button onClick={decrement}>Decrementar</button>
        </span>
      </div>
    </article>
  );
};

export default App;
