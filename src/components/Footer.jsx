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
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium md:text-xl'><a href='https://www.linkedin.com/in/htet-wai-yan19/' target='blank'><BsLinkedin/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium md:text-xl'><a href='https://www.instagram.com/1918hwy/' target='blank'><BsInstagram/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium md:text-xl'><a href='https://github.com/HtetWaiYan7191' target='blank'><BsGithub/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium md:text-xl'><a href='https://wellfound.com/u/htet-wai-yan-1' target='blank'><FaAngellist/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-medium md:text-xl'><a href='https://www.facebook.com/profile.php?id=100010329042751' target='blank'><BsFacebook/></a></li>
      </ul>
      </div>
    </section>
  )
}

export default Footer
