import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Hello Counter!</h1>
      <Button clicked={handleDecrement} text="-" />
      <p>{count}</p>
      <Button clicked={handleIncrement} text="+" />
      <Button clicked={handleReset} text="Reset" />
    </div>
  );
}

const Button = ({ text, clicked }) => {
  return <button onClick={clicked}>{text}</button>
}
