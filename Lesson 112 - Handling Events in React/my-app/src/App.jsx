import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [name, setName] = useState("harry")
  // const [form, setForm] = useState({email :"", phno : ""})
  const [form, setForm] = useState({})

  const handleClick = () => {
    alert("I am clicked")
  }

  const handleMouse = () => {
    alert("bye")
  }
  
  const handleChange = (e) => {
    // setName(e.target.value)
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      {/* <div className="mouse" onMouseOver={handleMouse}>
        I am mouse div
      </div> */}
      {/* <input type="text" value={name} onChange={handleChange} /> */}
      {/* <input type="text" name='email' value={form?.email} onChange={handleChange} />
      <input type="text" name='phno' value={form?.phno} onChange={handleChange} /> */}
      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange} />
      <input type="text" name='phno' value={form.phno?form.phno:""} onChange={handleChange} />
    </>
  )
}

export default App
