import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Testimonials/>
    </div>
  )
}

export default App
