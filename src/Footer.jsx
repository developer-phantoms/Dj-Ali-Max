import React from 'react';

export default function Footer() {
  return (
    <section className="w-full relative flex flex-col items-center justify-center bg-black p-8 sm:p-12 z-50 border-t border-white/10">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-10 items-center mb-12">
        {/* Left: Branding */}
        <div className="flex flex-col items-center md:items-start space-y-2 order-2 md:order-1">
          <h3 className="text-2xl font-syncopate font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
            DJ ALI MAX
          </h3>
          <p className="text-xs text-white/40 uppercase tracking-[0.3em]">Electronic Music Artist</p>
        </div>

        {/* Center: Socials */}
        <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
          <a href="https://instagram.com/djmax" target="_blank" rel="noopener noreferrer" 
            className="text-[#E1306C] hover:text-white hover:scale-110 transition-all duration-300 font-medium tracking-wide text-sm">
            Instagram
          </a>
          <a href="https://facebook.com/djmax" target="_blank" rel="noopener noreferrer" 
            className="text-[#1877F2] hover:text-white hover:scale-110 transition-all duration-300 font-medium tracking-wide text-sm">
            Facebook
          </a>
          <a href="https://soundcloud.com/djmax" target="_blank" rel="noopener noreferrer" 
            className="text-[#FF5500] hover:text-white hover:scale-110 transition-all duration-300 font-medium tracking-wide text-sm">
            SoundCloud
          </a>
          <a href="https://twitter.com/djmax" target="_blank" rel="noopener noreferrer" 
            className="text-[#1DA1F2] hover:text-white hover:scale-110 transition-all duration-300 font-medium tracking-wide text-sm">
            Twitter
          </a>
          <a href="https://tiktok.com/@djmax" target="_blank" rel="noopener noreferrer" 
            className="text-[#00f2ea] hover:text-white hover:scale-110 transition-all duration-300 font-medium tracking-wide text-sm">
            TikTok
          </a>
        </div>

        {/* Right: Contact */}
        <div className="flex flex-col items-center md:items-end space-y-4 order-3">
          <div className="text-center md:text-right">
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Email Us</p>
            <a href="mailto:mralimoghul@gmail.com" className="text-sm font-light hover:text-neon-pink transition-colors">
              mralimoghul@gmail.com
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Call Us</p>
            <a href="tel:03023578471" className="text-sm font-light hover:text-neon-blue transition-colors">
              03023578471
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Based In</p>
            <p className="text-sm font-light">Pakistan</p>
          </div>
        </div>
      </div>

      <div className="text-white/30 text-[10px] sm:text-xs font-light tracking-[0.4em] uppercase text-center border-t border-white/5 pt-8 w-full max-w-7xl">
        &copy; 2026 HATTECH MEDIA. ALL RIGHTS RESERVED.
      </div>
    </section>
  );
}