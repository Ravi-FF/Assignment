import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import Counter from './Counter/Counter'
import ListView from './ListView/ListView'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Counter /> */}
    <ListView />
  </React.StrictMode>,
)
