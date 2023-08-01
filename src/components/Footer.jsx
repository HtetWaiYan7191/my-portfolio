import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {FaAngellist} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <section className='footer-section py-10'>
      <div className='footer-container border-t'>
      <ul className='social-links flex mt-6 justify-center items-center'>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><a href=''><BsLinkedin/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><a href=''><BsInstagram/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><a href=''><BsGithub/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><a href=''><FaAngellist/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium'><a href=''><BsFacebook/></a></li>
      </ul>
      </div>
    </section>
  )
}

export default Footer
