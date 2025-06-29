import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext'

export default function Header() {

    const {theme, toggleTheme} = useTheme()

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
        { path: '/github', name: 'Github' },
    ];

    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 md:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isOpen
                                        ? 'M6 18L18 6M6 6l12 12' // X icon
                                        : 'M4 6h16M4 12h16M4 18h16' // Hamburger
                                }
                            />
                        </svg>
                    </button>

                    {/* Login & Get Started (Tablet+ only) */}
                    <div className="hidden md:flex items-center md:order-2">

                        <button
                        className='mx-3 cursor-pointer'
                        onClick={toggleTheme}
                        > he
                        </button>
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
                        >
                            Get started
                        </Link>
                    </div>

                    {/* Nav Links */}
                    <div className={`${isOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>
                        <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            {navLinks.map(({ path, name }) => (
                                <li key={path}>
                                    <NavLink
                                        to={path}
                                        onClick={() => setIsOpen(false)} // Auto close
                                        className={({ isActive }) =>
                                            `block py-2 pr-4 pl-3 duration-200 ${
                                                isActive ? 'text-orange-700' : 'text-gray-700'
                                            } border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-orange-700 md:p-0`
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
