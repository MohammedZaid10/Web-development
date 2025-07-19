import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbra = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      I am a Navbar and the count is {count}
    </div>
  )
}

export default Navbra
