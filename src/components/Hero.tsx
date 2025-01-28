import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <header className="min-h-screen flex flex-col justify-center items-center relative px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Full Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          I build exceptional digital experiences that make an impact
        </p>
        <div className="flex gap-6 justify-center mb-12">
          <a href="https://github.com/Hamilton8560" target="_blank" rel="noopener noreferrer" 
             className="text-gray-300 hover:text-white transition-colors">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/in/david-hamilton-277639217" target="_blank" rel="noopener noreferrer"
             className="text-gray-300 hover:text-white transition-colors">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:davidhamilton473@gmail.com"
             className="text-gray-300 hover:text-white transition-colors">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </header>
  );
}