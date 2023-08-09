import React, { useState } from "react";
import "./style.css";
const App = () => {
  const [count, setCount] = useState(() => 10);
  const [temperatureColor, setTemperaturColor] = useState("cold");

  function increment() {
    if (count > 13) {
      setTemperaturColor("hot");
    }
    return setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    if (count <= 13) {
      setTemperaturColor("cold");
    }
    return setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="app">
      <div className="therma_container">
        <div className={`therma_display ${temperatureColor} `}>{count}℃</div>
        <div className="therma_controller">
          <div onClick={increment} className="therma_inc controller">
            +
          </div>
          <div onClick={decrement} className="therma_dec controller">
            -
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
