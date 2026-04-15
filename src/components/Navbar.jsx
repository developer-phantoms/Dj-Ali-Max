import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ onNavigate = () => { } }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black py-3 sm:py-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <button type="button" onClick={() => onNavigate('home')} className="flex items-center text-left">
          <img src="/logo dj.png" alt="DJ ALI MAX" className="h-10 sm:h-12 md:h-13 w-auto object-contain" />
        </button>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-10 font-outfit uppercase tracking-widest text-xs sm:text-sm font-semibold">
          <button type="button" onClick={() => onNavigate('home')} className="hover:text-neon-blue transition-colors">Home</button>
          <button type="button" onClick={() => onNavigate('about')} className="hover:text-neon-pink transition-colors">About</button>
          <button type="button" onClick={() => onNavigate('gallery')} className="hover:text-neon-blue transition-colors">Gallery</button>
          <button type="button" onClick={() => onNavigate('book')} className="bg-gradient-to-r from-neon-pink to-neon-purple px-4 lg:px-6 py-2 rounded-full hover:shadow-[0_0_20px_rgba(255,0,85,0.5)] transition-all transform hover:-translate-y-1 text-white text-xs lg:text-sm">Book Now</button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setOpen(false)}></div>

      {/* Mobile Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-[75%] xs:w-[65%] sm:w-[50%] bg-[#080808] border-l border-white/10 z-50 flex flex-col pt-24 px-8 space-y-6 md:hidden transition-transform duration-500 ease-out shadow-[-20px_0_50px_rgba(0,0,0,0.5)] ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <button type="button" onClick={() => { setOpen(false); onNavigate('home'); }} className="text-left text-xl text-white hover:text-neon-blue uppercase tracking-widest font-syncopate font-bold transition-all">Home</button>
        <button type="button" onClick={() => { setOpen(false); onNavigate('about'); }} className="text-left text-xl text-white hover:text-neon-pink uppercase tracking-widest font-syncopate font-bold transition-all">About</button>
        <button type="button" onClick={() => { setOpen(false); onNavigate('gallery'); }} className="text-left text-xl text-white hover:text-neon-blue uppercase tracking-widest font-syncopate font-bold transition-all">Gallery</button>
        <div className="h-[1px] w-full bg-white/10 my-4"></div>
        <button type="button" onClick={() => { setOpen(false); onNavigate('book'); }} className="w-full bg-gradient-to-r from-neon-pink to-neon-purple px-6 py-4 rounded-full text-white uppercase tracking-widest text-sm font-bold shadow-[0_0_30px_rgba(255,0,85,0.3)]">Book Now</button>
      </div>
    </nav>
  );
}
