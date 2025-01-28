import React from 'react';
import { Quote } from 'lucide-react';
import { Theme } from '../types';
import { testimonials } from '../data/testimonials';

interface TestimonialsProps {
  theme: Theme;
}

export function Testimonials({ theme }: TestimonialsProps) {
  return (
    <section className={`py-20 px-4 ${theme.isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`} id="testimonials">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`relative p-6 rounded-lg ${
                theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'
              }`}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-500 opacity-20" />
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className={`text-sm ${theme.isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className={`${theme.isDark ? 'text-gray-300' : 'text-gray-600'} relative z-10`}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}