import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/card"

function App() {

  return (
    <>
      <Navbar />
      <div className="Cards">
        <Card title = "Card 1" description = "Description 1"/>
        <Card title = "Card 2" description = "Description 2"/>
        <Card title = "Card 3" description = "Description 3"/>
        <Card title = "Card 4" description = "Description 4"/>
      </div>
      <Footer />
    </>
  )
}

export default App
