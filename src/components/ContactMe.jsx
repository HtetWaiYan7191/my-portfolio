import React, { useState } from 'react';
import '../styles/ContactMe.css';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
    <section className='contact-me-section h-[100vh] md:h-[100vh] ' id='contact-me-section'>
      <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title '>
        Contact Me
      </h2>
      <div className='contact-me my-10 flex flex-col md:flex-row md:items-center md:w-[90%] md:mx-auto justify-around'>
        <div className='ending-text mx-auto  md:flex-1 md:px-20 '>
          <p className='text-white/90 text-sm text-center font-semibold my-10  md:text-lg  md:my-5'>
            I am  interested in learning about fresh projects and exploring potential
            collaborations. So don't hesitate to reach out and start a conversation. I'm here
            to assist you in any way I can.
          </p>
        </div>
        <div className='box  md:my-5 md:flex-1 mx-auto md:mx-0'>
          <span className='borderLine'></span>
        <form className='form-container bg-slate-900  z-20  py-10  px-5 rounded-md mx-auto ' action="https://formspree.io/f/mknayjll" method='POST'>
          <h2 className='text-white/90 text-center text-2xl'>Keep In Touch</h2>
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

      </div>
    </section>
  );
};

export default ContactMe;
