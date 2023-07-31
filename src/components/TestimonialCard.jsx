import React from 'react'
import {BsGithub, BsLinkedin} from 'react-icons/bs'

const TestimonialCard = ({testimonial}) => {
  return (
    <div className='testimonial-card border rounded-br-[25%] border-t-blue-400 border-r-blue-600 border-b-blue-700 shadow-lg shadow-blue-300 border-l-sky-300 rounded-tl-[10%] w-[90%] mx-auto bg-slate-900 p-5'>
        <div className="header flex items-center ">
            <a href="" className='me-5'><img src={testimonial.image} alt={testimonial.name} className='w-[50px] object-cover rounded-full' />
            </a>
            <div className='info-box flex flex-col'>
                <span className='text-sm text-white/90 font-semibold'>{testimonial.name}</span>
                <span className='text-xs text-white/80'>{testimonial.country}</span>
            </div>

        </div>
        <div className='body overflow-auto   h-[200px] mt-5'>
            <p className='text-white/90 text-sm'>{testimonial.recommendations}</p>
        </div>
        <div className='footer flex items-center justify-center mt-10'>
            <a href={testimonial.linkedIn} className='me-5' target='blank'>
             <BsLinkedin className='text-2xl text-white/90'/>
            </a>
            <a href={testimonial.gitHub} className='me-4' target='blank'>
             <BsGithub className='text-2xl text-white/90'/>
            </a>
        </div>
    </div>
  )
}

export default TestimonialCard
