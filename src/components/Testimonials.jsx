import React from 'react'
import testimonials from '../techAndProjects/testimonials'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <section className='testimonials-container h-[100vh] '>
        <h2 className='text-sky-200 font-semibold font-mono text-center text-3xl about-me-title '>Testimonials</h2>
      <div className='testimonial-card-container grid grid-cols-1 gap-10 mt-10'>
        {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
