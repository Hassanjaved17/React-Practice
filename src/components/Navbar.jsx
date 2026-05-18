import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-900 backdrop-blur-xl text-white shadow-lg">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="text-3xl font-extrabold tracking-wide cursor-pointer">
                    Handy<span className="text-orange-400">Craft</span>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">

                    <Link
                        to="/"
                        className="relative transition duration-300 hover:text-orange-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="relative transition duration-300 hover:text-orange-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className="relative transition duration-300 hover:text-orange-400 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Contact
                    </Link>
                </div>

                {/* Logout Button */}
                <button
                    className="
                        rounded-xl
                        border border-white/20
                        bg-white/10
                        px-5 py-2
                        text-sm font-semibold
                        text-white
                        backdrop-blur-md
                        transition-all duration-300
                        hover:scale-105
                        hover:border-red-400
                        hover:bg-red-500
                        active:scale-95
                        shadow-md hover:shadow-red-500/30
                    "
                >
                    Logout
                </button>
                <button
                    onClick={() =>
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                >
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </nav>
    )
}

export default Navbar