import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
    </div>
  )
}

export default App
