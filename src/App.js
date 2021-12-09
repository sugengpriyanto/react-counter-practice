import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [time, setTime] = useState(new Date())

  const tick = () => {
    setTime(new Date())
  }

  setInterval(tick, 1000)
  
  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}
