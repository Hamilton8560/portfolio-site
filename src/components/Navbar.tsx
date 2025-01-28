import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
}

export function Navbar({ theme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
      theme.isDark 
        ? `bg-gray-900/${isScrolled ? '90' : '80'}` 
        : `bg-white/${isScrolled ? '90' : '80'}`
    } transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className={`text-xl font-bold ${theme.isDark ? 'text-white' : 'text-gray-900'} hover:opacity-80 transition-opacity`}
          >
            David Hamilton
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${theme.isDark ? 'text-white' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${theme.isDark ? 'text-white' : 'text-gray-900'}`} />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className={`${theme.isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              About
            </a>
            <a 
              href="#resume" 
              onClick={(e) => scrollToSection(e, 'resume')}
              className={`${theme.isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Resume
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`${theme.isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, 'skills')}
              className={`${theme.isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`${theme.isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
            >
              Contact
            </a>
            <button
              onClick={theme.toggle}
              className={`p-2 rounded-full ${
                theme.isDark 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                theme.isDark ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'
              }`}
              aria-label={theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme.isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
          <div className="flex flex-col gap-4">
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className={`${theme.isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2`}
            >
              About
            </a>
            <a 
              href="#resume" 
              onClick={(e) => scrollToSection(e, 'resume')}
              className={`${theme.isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2`}
            >
              Resume
            </a>
            <a 
              href="#projects" 
              onClick={(e) => scrollToSection(e, 'projects')}
              className={`${theme.isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2`}
            >
              Projects
            </a>
            <a 
              href="#skills" 
              onClick={(e) => scrollToSection(e, 'skills')}
              className={`${theme.isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2`}
            >
              Skills
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className={`${theme.isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors py-2`}
            >
              Contact
            </a>
            <div className="py-2">
              <button
                onClick={theme.toggle}
                className={`p-2 rounded-full ${
                  theme.isDark 
                    ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                } transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  theme.isDark ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'
                }`}
                aria-label={theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme.isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}