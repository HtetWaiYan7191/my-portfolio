import React, { useEffect, useRef } from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs';
import {FaAngellist} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import {motion, useInView, useAnimation} from 'framer-motion'

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:false});
  const controls = useAnimation();

  useEffect(() => {
    if(isInView) {
      controls.start('visible')
    }
  }, [isInView])
  return (
    <section className='footer-section  md:pt-36 my-10'>
      <div className='footer-container border-t'>
        <motion.div variants={{
          hidden:{opacity:0, y:75,},
          visible: {opacity:1, y:0,}
        }}
        initial="hidden"
        animate={controls}
        transition={{duration:0.5}}
        ref={ref}
        >
      <ul className='social-links flex mt-6 justify-center items-center'>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-xl text-medium md:text-2xl'><a href='https://www.linkedin.com/in/htet-wai-yan19/' target='blank'><BsLinkedin/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-xl text-medium md:text-2xl'><a href='https://www.instagram.com/1918hwy/' target='blank'><BsInstagram/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-xl text-medium md:text-2xl'><a href='https://github.com/HtetWaiYan7191' target='blank'><BsGithub/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-xl text-medium md:text-2xl'><a href='https://wellfound.com/u/htet-wai-yan-1' target='blank'><FaAngellist/></a ></li>
        <li className='me-5 text-center px-2 hover:text-sky-500 text-sky-200 text-xl text-medium md:text-2xl'><a href='https://www.facebook.com/profile.php?id=100010329042751' target='blank'><BsFacebook/></a></li>
      </ul>  
      </motion.div>
      </div>

    </section>
  )
}

export default Footer
