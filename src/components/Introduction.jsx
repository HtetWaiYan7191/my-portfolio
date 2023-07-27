import React, { useEffect, useState } from 'react'
import programming from '../assets/undraw_programming_re_kg9v.svg'
import '../styles/Introduction.css';
import { Link } from 'react-router-dom';
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {FaAngellist} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const Introduction = () => {
  // // const [isScroll, setIsScroll] = useState(false);
  // // console.log(window.scrollY)
  // // useEffect(() => {
  // //     // Function to handle the scroll event
  // //     const handleScroll = () => {
  // //       // Define the point at which the animation should start
  // //       const startAnimationAt = 200; // Adjust this value as needed
  
  // //       // Get the scroll position
  // //       const scrollPosition = window.scrollY;
  
  // //       // Check if the user has scrolled past the defined point
  // //       if (scrollPosition > startAnimationAt) {
  // //         // Add a class to trigger the animation
  // //         setIsScroll(true);
  // //       } else {
  // //         // Remove the class when scrolling back up
  // //         setIsScroll(false);
  // //       }
  // //     };
  
  //     // Add the scroll event listener
  //     window.addEventListener('scroll', handleScroll);
  
  //     // Clean up the event listener on component unmount
  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  // }, []);

  return (
    <section className='intro-section-container flex-col  flex justify-around h-[80vh] items-center '>
      <div className='intro-section flex flex-col items-center'>
          <figure className={`intro-img-container`}>
              <img src={programming} alt="intro-image" />
          </figure>
          <h2 className='text-sky-500 font-extrabold text-3xl mt-4 font-mono intro-name'>Htet Wai Yan</h2>
      <h3 className='text-sky-200 font-mono mt-3'>Full Stack Developer</h3>
      <ul className='social-links flex mt-6 justify-center items-center'>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><Link><BsLinkedin/></Link></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><Link><BsInstagram/></Link></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><Link><BsGithub/></Link></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><Link><FaAngellist/></Link></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><Link><BsFacebook/></Link></li>
      </ul>
      </div>

      <div className='scrolldown-container flex flex-col'>
            <span className='text-sm text-sky-200 font-mono'>Scroll Down</span>
             <a href='' target=''> 
             <div className="mouse-container">
              <div className='mouse-wheel'></div>
            </div>
             </a>
      </div>
    </section>
  )
}

export default Introduction
