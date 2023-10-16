import React, { useEffect, useRef } from 'react'
import testimonials from '../techAndProjects/testimonials'
import TestimonialCard from './TestimonialCard'
import {motion, useInView, useAnimation} from 'framer-motion';

const Testimonials = () => {
  const headerRef = useRef(null);
  const testimonialRef = useRef(null);
  const headerRefInView = useInView(headerRef, {once:false});
  const testimonialRefInView = useInView(testimonialRef, {once:false});
  const headerControls = useAnimation();
  const testimonialControls = useAnimation();

  useEffect(() => {
    if(headerRefInView) {
      headerControls.start('visible')
    }

    if(testimonialRefInView) {
      testimonialControls.start('visible');
    }
  },[headerRefInView, testimonialRefInView])
  return (
    <section className='testimonials-container md:h-[200vh] lg:h-[150vh] md:pt-36 pt-32 ' id='testimonial-section'>
      <motion.div
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={headerControls}
      transition={{ duration: 0.5 }}
      ref={headerRef}>
        <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title '>Testimonials</h2>
        </motion.div>
      <div className='testimonial-card-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[90%] md:mx-auto gap-10 mt-10'>
        {testimonials.map((testimonial,id) => (
            <motion.div key={id}
            variants={{
              hidden: {opacity:0, x:-50},
              visible: {opacity:1, x:0, transition:{delay: id * 0.1, duration: 0.6}},
            }}
            initial="hidden"
            animate={testimonialControls}
            ref={testimonialRef}>
            <TestimonialCard key={testimonial.id} testimonial={testimonial}/>
            </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
