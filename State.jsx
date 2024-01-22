import React, { useState } from 'react'

function App() {

  const [count, setCount] = useState(2);
  function incstate() {
    setCount(count + 1);
  }

  const [disp, setDisp] = useState(false);
  const turnon = () => {
    setDisp(true);
  }
  const turnoff = () => {
    setDisp(false);
  }
  return (
    <div>
      {
        disp && <h1>display</h1>
      }
      {
        disp ? "light is on " : "light is off"
      }
      <button onClick={turnon}>turn on</button>
      <button onClick={turnoff}>turn off</button>
      <h1>{count}</h1>
      <button onClick={incstate}>inc state</button>
    </div>
  )
}

export default App