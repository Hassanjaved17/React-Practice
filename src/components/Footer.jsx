import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="border-t border-white/10 bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-6 py-10">

                {/* Top Section */}
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

                    {/* Brand */}
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-wide">
                            Handy<span className="text-orange-400">Craft</span>
                        </h1>

                        <p className="mt-3 max-w-sm text-sm text-gray-400">
                            Crafting beautiful handmade creations with passion,
                            creativity, and premium quality.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-6 text-sm font-medium">

                        <Link
                            to="/"
                            className="transition duration-300 hover:text-orange-400"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="transition duration-300 hover:text-orange-400"
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            className="transition duration-300 hover:text-orange-400"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t border-white/10"></div>

                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} HandyCraft. All rights reserved.
                    </p>

                    <div className="flex gap-4">

                        <a
                            href="#"
                            className="transition hover:text-orange-400"
                        >
                            Instagram
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-orange-400"
                        >
                            Facebook
                        </a>

                        <a
                            href="#"
                            className="transition hover:text-orange-400"
                        >
                            Twitter
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer