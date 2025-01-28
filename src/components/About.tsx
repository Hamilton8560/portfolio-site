import React, { useEffect, useRef } from 'react';
import { Theme } from '../types';
import { Code2, Brain, Rocket } from 'lucide-react';

interface AboutProps {
  theme: Theme;
}

export function About({ theme }: AboutProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`py-20 px-4 ${theme.isDark ? 'bg-gray-800/50' : 'bg-gray-50'}`} 
      id="about"
      ref={sectionRef}
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-pixelate">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            ref={el => cardsRef.current[0] = el}
            className={`p-6 rounded-lg reveal ${theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Development</h3>
            </div>
            <p className={theme.isDark ? 'text-gray-300' : 'text-gray-600'}>
              Experienced in building modern web applications with React, Angular, and Node.js.
              Strong focus on clean code and best practices.
            </p>
          </div>
          
          <div 
            ref={el => cardsRef.current[1] = el}
            className={`p-6 rounded-lg reveal ${theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">AI Integration</h3>
            </div>
            <p className={theme.isDark ? 'text-gray-300' : 'text-gray-600'}>
              Passionate about integrating AI solutions into applications.
              Currently exploring machine learning and neural networks.
            </p>
          </div>
          
          <div 
            ref={el => cardsRef.current[2] = el}
            className={`p-6 rounded-lg reveal ${theme.isDark ? 'bg-gray-800' : 'bg-white shadow-lg'}`}
            style={{ transitionDelay: '0.6s' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Innovation</h3>
            </div>
            <p className={theme.isDark ? 'text-gray-300' : 'text-gray-600'}>
              Dedicated to creating innovative solutions that solve real-world problems
              and deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}