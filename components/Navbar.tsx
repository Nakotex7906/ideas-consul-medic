import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 px-4 md:px-8 py-6 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/40 backdrop-blur-md rounded-full px-6 py-3 border border-sage/10 shadow-sm">
        <div className="flex items-center gap-2">
          <Leaf className="text-sage w-6 h-6" />
          <span className="text-xl font-serif italic tracking-tight text-moss font-semibold">MedScribe AI</span>
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a className="text-sm font-medium text-moss/70 hover:text-moss transition-colors cursor-pointer">Nuestra Filosofía</a>
          <a className="text-sm font-medium text-moss/70 hover:text-moss transition-colors cursor-pointer">La Experiencia</a>
          <button className="bg-moss text-stone px-6 py-2 rounded-full text-sm font-medium hover:bg-sage transition-all shadow-md hover:shadow-lg">
            Solicitar Demo
          </button>
        </div>
        <button className="md:hidden text-moss">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;