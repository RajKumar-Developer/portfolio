// import React from 'react'

import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg  items-center justify-center flex font-bold shadow-md">
            <p className="blue-gradient_text">Rk</p>
        </NavLink>
        <nav className="flex text-lg gap-10 pl-8 font-medium">
            <NavLink to="/about" className={({isActive})=>isActive?'blue-gradient_text':'text-slate-400'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive})=>isActive?'blue-gradient_text':'text-slate-400'}>
                Projects
            </NavLink>
        </nav>
        
    </header>
  )
}

export default Navbar