import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.svg";

const navLinks = [
  { name: 'Home', to: '/', prefix: '00' },
  { name: 'Destination', to: '/destination', prefix: '01' },
  { name: 'Crew', to: '/crew', prefix: '02' },
  { name: 'Technology', to: '/technology', prefix: '03' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-10 pt-6 text-white">
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Logo" className="w-12 h-12" />
        </NavLink>

        <div className="hidden lg:block absolute left-24 right-1/2 h-px bg-white/30 backdrop-blur-sm z-10" />

        <button
          className="lg:hidden z-20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <ul className="hidden lg:flex backdrop-blur-md bg-white/10 text-white px-16 py-6 gap-10 tracking-widest uppercase font-light text-sm ml-auto">
          {navLinks.map(({ name, to, prefix }) => (
            <li key={name}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center gap-2 transition duration-200 ${
                    isActive ? 'border-b-2 border-white' : 'hover:border-b-2 hover:border-gray-500'
                  }`
                }
              >
                <span className="font-bold text-white/50">{prefix}</span>
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md py-6 rounded-lg text-sm uppercase tracking-wider">
          {navLinks.map(({ name, to, prefix }) => (
            <NavLink
              key={name}
              to={to}
              onClick={() => setMenuOpen(false)} 
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 transition ${
                  isActive ? 'border-b-2 border-white' : 'hover:text-blue-300'
                }`
              }
            >
              <span className="text-white/50 font-semibold">{prefix}</span>
              <span>{name}</span>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
