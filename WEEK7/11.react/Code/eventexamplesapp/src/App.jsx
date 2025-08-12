import React, { useState } from "react";
import "./App.css";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  // Counter state
  const [count, setCount] = useState(0);

  // Increment + multiple actions
  const handleIncrement = () => {
    incrementCount();
    sayHello();
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    console.log("Hello - This is a static message");
    alert("Hello - This is a static message");
  };

  // Decrement
  const handleDecrement = () => {
    setCount(count - 1);
  };

  // Welcome message with argument
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic click event
  const handleSyntheticClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic event:", event);
  };

  return (
    <div className="App">
      <h1>Event Examples App</h1>

      {/* Counter */}
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

      <hr />

      {/* Say Welcome */}
      <div>
        <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
      </div>

      <hr />

      {/* Synthetic event */}
      <div>
        <button onClick={handleSyntheticClick}>Synthetic Event Button</button>
      </div>

      <hr />

      {/* Currency Converter */}
      <CurrencyConverter />
    </div>
  );
}

export default App;
