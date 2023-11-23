import React, { useEffect, useState, useRef } from 'react';
import {motion, useInView, useAnimation, useReducedMotion} from 'framer-motion';
import '../styles/ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const headerRef = useRef(null);
  const formRef = useRef(null);
  const endingRef = useRef(null);
  const headerInView = useInView(headerRef, {once:false})
  const formInview = useInView(formRef, {once: false})
  const endingInView = useInView(endingRef, {once:false})
  const headerControls = useAnimation();
  const boxControls = useAnimation();
  const endingControls = useAnimation();

  useEffect(() => {
    if(headerInView) {
      headerControls.start('visible');
    }
    if(formInview) {
      boxControls.start('visible')
    }
    if(endingInView) {
      endingControls.start('visible');
    }
  },[headerInView, endingInView, formInview])

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section className='contact-me-section  md:h-[100vh] md:pt-36 pt-32 ' id='contact-me-section'>
      <motion.div variants={{
        hidden: {opacity:0, y:75},
        visible: {opacity:1, y:0}
      }}
      initial="hidden"
      animate={headerControls}
      transition={{duration: 0.5}}
      ref={headerRef}
      >
      <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title '>
        Contact Me
      </h2>
      </motion.div>
      <div className='contact-me my-10 flex flex-col md:flex-row md:items-center md:w-[90%] md:mx-auto justify-around'>

        <div className='ending-text mx-auto  md:flex-1 md:px-20 '>
        <motion.div variants={{
          hidden: {opacity:0, x:-50},
          visible: {opacity:1, x:0}
        }}
        initial="hidden"
        animate={endingControls}
        transition={{duration: 0.5}}
        ref={endingRef}
        >
          <p className='text-white/90 text-sm text-center font-semibold my-10  md:text-lg  md:my-5'>
            I am  interested in learning about fresh projects and exploring potential
            collaborations. So don't hesitate to reach out and start a conversation. I'm here
            to assist you in any way I can.
          </p>
          </motion.div>
        </div>
       
       <motion.div variants={{
        hidden: {opacity:0, x:200},
        visible: {opacity:1, x:0}
       }}
       initial="hidden"
       animate={boxControls}
       ref={formRef}
       transition={{duration:0.5}}
       >
        <div className='box  md:my-5 md:flex-1 mx-auto md:mx-0'>
          <span className='borderLine'></span>
        <form className='form-container bg-slate-900 z-20  py-10  px-5 rounded-md mx-auto ' action="https://formspree.io/f/mknayjll" method='POST'>
          <h2 className='text-white/90 text-center text-2xl md:text-3xl font-bold md:text-sky-500 twinkle-animation tracking-wider'>Keep In Touch</h2>
          <div className={`input-box my-7 relative w-[100%] mx-auto `}>
            <input type='text' className='w-[100%]' required value={name} onChange={handleNameChange} />
            <span>Name</span>
          </div>

          <div className={`input-box my-7 relative w-[100%] mx-auto `}>
            <input type='text' className='w-[100%]' required value={email} onChange={handleEmailChange} />
            <span>Email</span>
          </div>

          <div
            className={`input-box  my-7 relative w-[100%] mx-auto`}
          >
            <textarea
              name='message'
              id='message'
              cols='38'
              rows='7'
              className='md:w-[100%]'
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
            <span className={` ${message ? 'hide-placeholder' : ''}`}>How can I help you?</span>
          </div>
         <div className="button-container flex justify-center md:my-5">
         <button className="border-2 d-button border-sky-500 bg-sky-500/20 text-sky-300 font-bold py-1 px-2  rounded-sm" type="submit" >
           Submit
        </button>
         </div>
        </form>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
