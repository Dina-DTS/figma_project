import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.svg";

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Destination', to: '/destination' },
  { name: 'Crew', to: '/crew' },
  { name: 'Technology', to: '/technology' },
];

export default function Navbar() {
  return (
    <nav className="bg-black border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-12 h-12" alt="Logo" />
        </NavLink>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="ul-class">
            {navLinks.map(({ name, to }) => (
              <li key={name}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded-sm md:p-0 transition ${
                      isActive
                        ? 'text-blue-400'
                        : 'text-white hover:text-blue-400'
                    }`
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
  );
}
