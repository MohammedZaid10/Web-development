import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // Here we are making state called count and then we create a function called as setCount, so whenever we run setCount the value of count should change its state as it is defined to useState function which is nothing but a hook in react, so useState function provides a state count and a function setCount which helps updates the state, so here we make state called as count and we give it an initial value as zero`and then create a setcount which helps update the state count

  return (
    <>
      <div>The count is {count}</div>
      <button onClick={()=>{setCount(count+1)}}>Update Count</button>
    </>
  )
}

export default App
