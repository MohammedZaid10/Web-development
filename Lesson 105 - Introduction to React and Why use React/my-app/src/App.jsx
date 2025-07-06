import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar';
import Footer from './components/Footer';

function App() {
  const [count, setValue] = useState(0)

  return (
      <div className='App'>
        <Navbar/>
        <div className="value">{count}</div>
        <button onClick={()=>{setValue(count + 1)}}>Click me</button>
        <Footer/>
      </div>
  );
}

export default App
