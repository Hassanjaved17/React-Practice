import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import ThemeContext from '../context/ThemeContext'

function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext)
    const [menuOpen, setMenuOpen] = useState(false)

    const isDark = theme === 'dark'

    return (
        <nav
            className={`sticky top-0 z-50 border-b backdrop-blur-xl shadow-lg transition-colors duration-300 ${isDark
                    ? 'bg-gray-900/95 border-white/10 text-white'
                    : 'bg-white/95 border-gray-200 text-gray-800'
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

                {/* Logo */}
                <div className="text-3xl font-extrabold tracking-wide cursor-pointer select-none">
                    Handy<span className="text-orange-400">Craft</span>
                </div>

                {/* Nav Links — desktop */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {['/', '/about', '/contact'].map((path, i) => {
                        const label = ['Home', 'About', 'Contact'][i]
                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`relative transition duration-300 hover:text-orange-400
                                    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                                    after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full
                                    ${isDark ? 'text-gray-200' : 'text-gray-700'}`}
                            >
                                {label}
                            </Link>
                        )
                    })}
                </div>

                {/* Right side controls */}
                <div className="flex items-center gap-3">

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(isDark ? 'light' : 'dark')}
                        aria-label="Toggle theme"
                        className={`relative w-14 h-7 rounded-full border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400/50 ${isDark
                                ? 'bg-gray-700 border-gray-600'
                                : 'bg-orange-100 border-orange-200'
                            }`}
                    >
                        {/* Track icons */}
                        <span className="absolute left-1.5 top-1/2 -translate-y-1/2 text-xs pointer-events-none">☀️</span>
                        <span className="absolute right-1.5 top-1/2 -translate-y-1/2 text-xs pointer-events-none">🌙</span>
                        {/* Thumb */}
                        <span
                            className={`absolute top-1 h-5 w-5 rounded-full shadow transition-all duration-300 ${isDark
                                    ? 'translate-x-7 bg-indigo-400'
                                    : 'translate-x-0 bg-orange-400'
                                }`}
                        />
                    </button>

                    {/* Logout Button */}
                    <button
                        className={`hidden md:inline-flex items-center gap-2 rounded-xl border px-5 py-2 text-sm font-semibold
                            backdrop-blur-md transition-all duration-300
                            hover:scale-105 active:scale-95 shadow-md
                            ${isDark
                                ? 'border-white/20 bg-white/10 text-white hover:border-red-400 hover:bg-red-500 hover:shadow-red-500/30'
                                : 'border-gray-300 bg-gray-100 text-gray-800 hover:border-red-400 hover:bg-red-500 hover:text-white hover:shadow-red-500/20'
                            }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                        </svg>
                        Logout
                    </button>

                    {/* Hamburger — mobile */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Open menu"
                        className={`md:hidden p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-gray-100'
                            }`}
                    >
                        <span className={`block w-5 h-0.5 mb-1 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-800'} ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                        <span className={`block w-5 h-0.5 mb-1 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-800'} ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-0.5 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-gray-800'} ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className={`flex flex-col gap-1 px-6 pb-4 border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                    {[['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact']].map(([path, label]) => (
                        <Link
                            key={path}
                            to={path}
                            onClick={() => setMenuOpen(false)}
                            className={`py-2.5 text-sm font-medium transition-colors hover:text-orange-400 ${isDark ? 'text-gray-200' : 'text-gray-700'
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                    <button
                        className={`mt-2 w-full rounded-xl border px-5 py-2 text-sm font-semibold transition-all
                            hover:border-red-400 hover:bg-red-500 hover:text-white
                            ${isDark ? 'border-white/20 bg-white/10 text-white' : 'border-gray-300 bg-gray-100 text-gray-800'}`}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar