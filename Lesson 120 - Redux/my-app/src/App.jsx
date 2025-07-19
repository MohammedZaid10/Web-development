import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbra from './components/Navbra.jsx'
import { useSelector, useDispatch } from 'react-redux'
// added
import { decrement, increment, multiply } from './redux/counter/counterSlice.js'
// added

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbra />
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>
    </>
  )
}

export default App
