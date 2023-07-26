import React from 'react'
import programming from '../assets/undraw_programming_re_kg9v.svg'
import '../styles/Introduction.css';
import { Link } from 'react-router-dom';
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {FaAngellist} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const Introduction = () => {
  return (
    <section className='intro-section-container flex flex-col items-center'>
      <div className='intro-section'>
          <figure className='intro-img-container'>
              <img src={programming} alt="intro-image" />
          </figure>
      </div>
      <h2 className='text-sky-500 font-extrabold text-3xl mt-4 font-mono'>Htet Wai Yan</h2>
      <h3 className='text-sky-200 font-mono mt-2'>Full Stack Developer</h3>
      <ul className='social-links flex mt-6 justify-center items-center'>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><Link><BsLinkedin/></Link></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><Link><BsInstagram/></Link></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><Link><BsGithub/></Link></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><Link><FaAngellist/></Link></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><Link><BsFacebook/></Link></li>
      </ul>

    </section>
  )
}

export default Introduction
