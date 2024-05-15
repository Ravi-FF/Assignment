import React, { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div className='counter-wrapper'>
      <div>
        <h2>React Web</h2>
        <h1 style={{ color: "navy" }}>{count}</h1>
        <div style={{ margin: "20px 0" }}>
          <button onClick={() => setCount(count + 1)} style={{ marginRight: "10px" }}>Increment</button>
          <button onClick={() => setCount(count - 1)}>decrement</button>
        </div>
        <div>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  )
}
