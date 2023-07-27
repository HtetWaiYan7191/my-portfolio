import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Skills/>
    </div>
  )
}

export default App
