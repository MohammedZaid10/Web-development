import { useState, useEffect } from 'react'
import './App.css'
import Navbar from '../components/Navbar'

function App() {
  const [cards, setCards] = useState([])

  const fetchdata = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data)
  }

  useEffect(() => {
    fetchdata()
  }, [])


  return (
    <>
      <Navbar />
      <div className="container">
        {cards.map((card) => {
          return <div key={card.id} className="carddivclassname">
            <h1 className="text-4xl font-bold leading-tight mt-4 mb-2">
              {card.title}
            </h1>
            <p className="text-xl mt-4">
              {card.body}
            </p>
            <span className="text-xl mt-4">By: UserId: {card.userId} </span>
          </div>
        })}

      </div>
    </>
  )
}

export default App
