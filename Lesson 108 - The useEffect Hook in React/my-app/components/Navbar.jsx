import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

    // Case 1 : Run on every render
    useEffect(() => {
        alert("hey i run on every render")
    })
    // when  we give without any second argument, this useeffect will run on every render 

    // Case 2 : Run on first render
    useEffect(() => {
        alert("hey welcome to my page")
    }, [])
    // when  we give empty array, it means we want useeffect to work when nothing is changed 

    // Case 3 : Run only when certain values changed
    useEffect(() => {
        alert("Color was changed")
    }, [color])

    // Example of Cleanup function
    useEffect(() => {
        alert("hey, welcome to my page. This is the first render of app.jsx")

        return () => {
            alert("Component was unmounted")
        }
    }, [])

    return (
        <div>
            I am a {color} of the Navbar
        </div>
    )
}

export default Navbar