import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import {RxCross1} from 'react-icons/rx'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <nav className={`py-4 ${isMenuOpen ? `bg-inherit` : `bg-slate-900`} fixed w-[100%] z-30`}>
      <div className={`mobile-menu-bar md:hidden flex justify-end ${isMenuOpen ? `opacity-0` : `flex`}`}>
        <BiMenuAltRight className='text-sky-500 text-5xl me-2' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
      </div>
      <div className={`menu-list-container flex flex-row-reverse z-20 justify-between  bg-slate-800 ${isMenuOpen ? 'left-0' : '-left-100'}`}>
        <div className="cross-container flex justify-end mt-4 me-3">
          <RxCross1 className='text-4xl text-sky-700 hover:text-sky-500' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        </div>
        <ul className='list-container text-sky-700 font-semibold py-5 flex flex-col'>
          <li className=' hover:text-sky-500'><NavLink>Introduction</NavLink></li>
          <li className=' hover:text-sky-500'><NavLink>About Me</NavLink></li>
          <li className=' hover:text-sky-500'><NavLink>Skills</NavLink></li>
          <li className=' hover:text-sky-500'><NavLink>Projects</NavLink></li>
          <li className=' hover:text-sky-500'><NavLink>Testimonials</NavLink></li>
          <li className=' hover:text-sky-500'><NavLink>Contact</NavLink></li>
        </ul>
      </div>
      <div className='hidden md:flex'>
          pc navlinks ...
      </div>
    </nav>
  )
}

export default Navbar
