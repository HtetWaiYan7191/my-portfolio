import React from 'react'
import Navbar from './components/Navbar'
import './App.css';
import Introduction from './components/Introduction';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import UpdateNavbar from './components/UpdateNavbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Testimonials/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
