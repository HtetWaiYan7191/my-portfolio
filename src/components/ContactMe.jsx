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
      <h2 className='font-mono text-3xl font-semibold text-center text-sky-200 about-me-title '>
        Contact Me
      </h2>
      </motion.div>
      <div className='contact-me my-10 flex flex-col lg:flex-row md:items-center md:w-[90%] md:mx-auto justify-around'>

        <div className='mx-auto ending-text md:px-20 '>
        <motion.div variants={{
          hidden: {opacity:0, x:-50},
          visible: {opacity:1, x:0}
        }}
        initial="hidden"
        animate={endingControls}
        transition={{duration: 0.5}}
        ref={endingRef}
        >
          <p className='px-3 my-10 text-sm font-semibold text-center text-white/90 md:text-lg md:my-5'>
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
        <div className='mx-auto box md:my-5 md:flex-1 md:mx-0'>
          <span className='borderLine'></span>
        <form className='z-20 px-5 py-10 mx-auto rounded-md form-container bg-slate-900 ' action="https://formspree.io/f/mknayjll" method='POST'>
          <h2 className='text-2xl font-bold tracking-wider text-center text-white/90 md:text-3xl md:text-sky-500 twinkle-animation'>Keep In Touch</h2>
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
              className='w-[100%]'
              value={message}
              onChange={handleMessageChange}
              required
            ></textarea>
            <span className={` ${message ? 'hide-placeholder' : ''}`}>How can I help you?</span>
          </div>
         <div className="flex justify-center button-container md:my-5">
         <button className="px-2 py-1 font-bold border-2 rounded-sm d-button border-sky-500 bg-sky-500/20 text-sky-300" type="submit" >
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
