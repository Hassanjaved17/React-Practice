import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <div className="main flex items-center justify-between p-4 bg-gray-800 text-white">
                <div className="logo text-2xl font-bold">Logo</div>
                <div className="nav-items">
                    <Link to="/" className="mx-2 hover:text-gray-400">Home</Link>
                    <Link to="/about" className="mx-2 hover:text-gray-400">About</Link>
                    <Link to="/contact" className="mx-2 hover:text-gray-400">Contact</Link>
                </div>






            </div>



        </>
    )
}

export default Navbar
