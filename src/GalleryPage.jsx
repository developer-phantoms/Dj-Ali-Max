import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, Play, Camera, Image as ImageIcon, Maximize2, X } from 'lucide-react';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPage({ onBackHome, onNavigate }) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const horizontalRef = useRef(null);
  const gridRef = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  // Total Items for you to add later
  const horizontalItems = [1, 2, 3, 4];
  const gridItems = [5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Animation
      gsap.from('.gallery-hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power4.out'
      });

      // Pinning Horizontal Scroll
      gsap.to('.horizontal-track', {
        xPercent: -75,
        ease: 'none',
        scrollTrigger: {
          trigger: horizontalRef.current,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: '+=3000',
        }
      });

      // Grid Items reveal
      gsap.from('.gallery-grid-item', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-outfit overflow-x-hidden" ref={containerRef}>
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-purple/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-neon-blue/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Header / Hero */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <button onClick={onBackHome} className="group inline-flex items-center gap-2 text-gray-400 hover:text-neon-pink transition-colors uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold glass px-4 py-2 rounded-full border border-white/5 gallery-hero-text">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back Home
          </button>
          <h1 className="text-3xl sm:text-5xl md:text-8xl font-syncopate font-black gallery-hero-text leading-tight">
            VISUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" style={{ backgroundImage: 'linear-gradient(90deg, #00f0ff, #7000ff, #ff0055, #00f0ff)', backgroundSize: '200% auto', animation: 'gradientShift 4s infinite' }}>ECHOES</span>
          </h1>
          <p className="text-gray-500 text-xs sm:text-lg max-w-2xl mx-auto gallery-hero-text font-light tracking-wide px-4">
            Capturing the raw energy, the light, and the motion of every performance. A journey through sonic visuals.
          </p>
        </div>
      </section>

      {/* HORIZONTAL IMMERSIVE SECTION */}
      <section ref={horizontalRef} className="h-screen flex items-center bg-[#050505] overflow-hidden">
        <div className="flex gap-4 sm:gap-8 px-6 sm:px-20 horizontal-track will-change-transform">
          {horizontalItems.map((item, index) => {
            const featImages = {
              0: "/dj.jpg",
              1: "/live1.jpg",
              2: "/live2.jpg",
              3: "/live3.jpg"
            };
            return (
              <div 
                key={item} 
                onClick={() => setSelectedImg(featImages[index])}
                className="w-[85vw] sm:w-[80vw] md:w-[60vw] h-[50vh] sm:h-[60vh] shrink-0 glass rounded-[30px] sm:rounded-[40px] overflow-hidden relative group border border-white/10 cursor-pointer"
              >
                <img src={featImages[index]} alt={`Featured ${item}`} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 right-6 sm:right-10 flex justify-between items-end">
                  <div>
                    <span className="text-neon-blue font-syncopate text-[8px] sm:text-[10px] uppercase tracking-[0.4em] mb-1 sm:mb-2 block">Premium Capture</span>
                    <h3 className="text-base sm:text-2xl md:text-4xl font-syncopate font-bold uppercase leading-tight">FEATURED <br className="sm:hidden" /> SCENE 0{item}</h3>
                  </div>
                  <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-full glass border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                    <Maximize2 className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* GRID SECTION */}
      <section ref={gridRef} className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
            <h2 className="text-2xl sm:text-4xl font-syncopate font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink">Recent Moments</h2>
            <div className="flex gap-4">
              <span className="glass px-4 py-2 rounded-full text-[10px] uppercase font-bold text-neon-blue border border-neon-blue/20">All</span>
              <span className="glass px-4 py-2 rounded-full text-[10px] uppercase font-bold text-gray-500 hover:text-white transition-colors cursor-pointer">Live</span>
              <span className="glass px-4 py-2 rounded-full text-[10px] uppercase font-bold text-gray-500 hover:text-white transition-colors cursor-pointer">BTS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridItems.map((item, idx) => {
              const imgPath = `/${idx + 1}.jpg`;
              return (
                <div 
                  key={item} 
                  onClick={() => setSelectedImg(imgPath)}
                  className="gallery-grid-item aspect-square glass rounded-3xl overflow-hidden relative group border border-white/5 cursor-pointer"
                >
                  <img src={imgPath} alt={`Gallery ${item}`} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                      <ImageIcon size={20} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-20 sm:py-32 bg-[#050505] text-center px-6">
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-10">
          <Camera className="w-10 h-10 sm:w-16 sm:h-16 mx-auto text-neon-pink animate-pulse" />
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-syncopate font-black uppercase leading-tight">Witness The <br /> Live Energy</h2>
          <p className="text-gray-400 font-light text-sm sm:text-base">Join the movement and be part of the next immersive experience.</p>
          <button 
            onClick={() => onNavigate('book')}
            className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-8 py-4 sm:px-12 sm:py-5 rounded-full text-white font-syncopate font-black text-[10px] sm:text-xs tracking-widest hover:shadow-[0_0_50px_rgba(112,0,255,0.4)] transition-all hover:scale-105"
          >
            Book DJ Ali Max
          </button>
        </div>
      </section>

      {/* IMAGE MODAL (LIGHTBOX) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
            onClick={() => setSelectedImg(null)}
          >
            <X size={40} strokeWidth={1.5} />
          </button>
          
          <div className="relative max-w-7xl w-full h-[80vh] flex items-center justify-center">
            <img 
              src={selectedImg} 
              alt="Preview" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 animate-in zoom-in-95 duration-500"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
