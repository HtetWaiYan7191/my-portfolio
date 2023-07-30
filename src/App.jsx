import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
