import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  // const [first, setfirst] = useState(first)
  const [color, setcolor] = useState(0)

  // // Case 1 : Run on every render
  // useEffect(() => {
  //   alert("hey i run on every render")
  // })
  // // when  we give without any second argument, this useeffect will run on every render 

  // // Case 2 : Run on first render
  // useEffect(() => {
  //   alert("hey welcome to my page")
  // }, [])
  // // when  we give empty array, it means we want useeffect to work when nothing is changed 

  // // Case 3 : Run only when certain values changed
  // useEffect(() => {
  //   alert("Color was changed")
  // }, [color])
  
  useEffect(() => {
    alert("Count was changed")
    setcolor(color + 1)
  }, [count])
  // count was changed will work even at the start when page renders as count also gets intialised to zero initailly
  
  return (
    <>
      <div>
        <Navbar color={"navy" + " blue" + color} />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
