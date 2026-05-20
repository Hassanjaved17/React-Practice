import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext'

function Footer() {
    const { theme } = useContext(ThemeContext)
    const isDark = theme === 'dark'

    return (
        <footer
            className={`border-t transition-colors duration-300 ${
                isDark
                    ? 'bg-gray-900/95 border-white/10 text-white'
                    : 'bg-white/95 border-gray-200 text-gray-800'
            }`}
        >
            <div className="mx-auto max-w-7xl px-6 py-10">

                {/* Top Section */}
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

                    {/* Brand + tagline */}
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-wide">
                            Handy<span className="text-orange-400">Craft</span>
                        </h1>
                        <p className={`mt-2 max-w-sm text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            Crafting beautiful handmade creations with passion,
                            creativity, and premium quality.
                        </p>
                    </div>

                    {/* Nav links */}
                    <div className="flex gap-6 text-sm font-medium">
                        {[['/', 'Home'], ['/about', 'About'], ['/contact', 'Contact']].map(([path, label]) => (
                            <Link
                                key={path}
                                to={path}
                                className={`relative transition duration-300 hover:text-orange-400
                                    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                                    after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full
                                    ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className={`my-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`} />

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
                    <p className={isDark ? 'text-gray-400' : 'text-gray-500'}>
                        © {new Date().getFullYear()} HandyCraft. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {/* Instagram */}
                        <a href="#" aria-label="Instagram"
                            className={`transition-colors duration-200 hover:text-orange-400 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                            </svg>
                        </a>
                        {/* Facebook */}
                        <a href="#" aria-label="Facebook"
                            className={`transition-colors duration-200 hover:text-orange-400 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        {/* Twitter / X */}
                        <a href="#" aria-label="Twitter"
                            className={`transition-colors duration-200 hover:text-orange-400 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4l16 16M4 20L20 4"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer