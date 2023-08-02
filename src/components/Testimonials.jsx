import React from 'react'
import testimonials from '../techAndProjects/testimonials'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section className='testimonials-container h-[280vh] md:h-[200vh] lg:h-[150vh] md:pt-36 ' id='testimonial-section'>
        <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title '>Testimonials</h2>
      <div className='testimonial-card-container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[90%] md:mx-auto gap-10 mt-10'>
        {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
