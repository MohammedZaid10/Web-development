import React, { useContext } from 'react'
import Component1 from './component1'
import { CounterContext } from '../context/context'

const Button = ({count}) => {
    const value = useContext(CounterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component1 count={count} /></span> I am Button</button>
    </div>
  )
}

export default Button
