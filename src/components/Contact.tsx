import React from 'react';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
        <p className="text-xl text-gray-300 mb-8">
          I'm currently available for freelance work and full-time opportunities.
        </p>
        <a href="mailto:davidhamilton473@gmail.com"
           className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
          <Mail className="w-5 h-5" />
          <span>Get in Touch</span>
        </a>
      </div>
    </section>
  );
}