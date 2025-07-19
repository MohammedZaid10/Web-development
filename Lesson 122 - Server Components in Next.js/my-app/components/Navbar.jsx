import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex items-center space-x-6 text-white">
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Home</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">About</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar