import React, { useState } from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import {RxCross1} from 'react-icons/rx'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)


  return (
    <nav className={`py-4 ${isMenuOpen ? `bg-inherit` : `bg-slate-900/80 backdrop-blur-sm`} fixed w-[100%] z-30 `}>
      <div className={`mobile-menu-bar md:hidden flex justify-end ${isMenuOpen ? `opacity-50` : `flex`}`}>
        <BiMenuAltRight className='text-sky-500 text-5xl me-2' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
      </div>
      <div className={`menu-list-container flex flex-row-reverse z-20 justify-between  bg-slate-800/95 backdrop-blur-sm ${isMenuOpen ? 'left-[0]' : '-left-100'}`}>
        <div className="cross-container flex justify-end mt-4 me-3">
          <RxCross1 className='text-4xl text-sky-700 hover:text-sky-500' onClick={() => setIsMenuOpen(!isMenuOpen)}/>
        </div>
        <ul className='list-container text-sky-700 font-semibold py-5 flex flex-col '>
          <li className=' hover:text-sky-500'><a href='#introduction-section' >Introduction</a></li>
          <li className=' hover:text-sky-500'><a href='#about-me-section'>About Me</a></li>
          <li className=' hover:text-sky-500'><a href='#skill-section'>Skills</a></li>
          <li className=' hover:text-sky-500'><a href='#project-section'>Projects</a></li>
          <li className=' hover:text-sky-500'><a href='#testimonial-section'>Testimonials</a></li>
          <li className=' hover:text-sky-500'><a href='#contact-me-section'>Contact</a></li>
        </ul>
      </div>
      <div className='hidden md:flex'>
          pc navlinks ...
      </div>
    </nav>
  )
}

export default Navbar
