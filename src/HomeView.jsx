import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from './Footer';

export default function HomeView() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const galleryItems = [1, 2, 3, 4, 5];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=5000',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    gsap.set(aboutRef.current, { xPercent: 100, autoAlpha: 0 });
    gsap.set(servicesRef.current, { yPercent: 100, autoAlpha: 0 });
    gsap.set('.gallery-track', { xPercent: 0 });
    gsap.set(galleryRef.current, { autoAlpha: 0, scale: 0.8 });
    gsap.set(contactRef.current, { autoAlpha: 0, yPercent: 50 });

    gsap.to('.dj-system', {
      y: -20,
      rotationX: 5,
      rotationY: -5,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });

    gsap.to('.glow-particle', {
      opacity: 0.2,
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      stagger: 0.1,
    });

    tl.to(heroRef.current, { scale: 0.9, autoAlpha: 0, duration: 1 })
      .to(aboutRef.current, { xPercent: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }, '<')
      .fromTo('.about-text', { x: -50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, '-=0.5')
      .fromTo('.about-img', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8 }, '<')
      .to(aboutRef.current, { yPercent: -100, autoAlpha: 0, duration: 1 })
      .to(servicesRef.current, { yPercent: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }, '<')
      .fromTo('.service-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }, '-=0.5')
      .to(servicesRef.current, { scale: 1.5, autoAlpha: 0, duration: 1 })
      .to(galleryRef.current, { autoAlpha: 1, scale: 1, duration: 1, ease: 'power3.out' }, '<')
      .to('.gallery-track', { xPercent: -50, duration: 2, ease: 'none' })
      .to(galleryRef.current, { autoAlpha: 0, duration: 1 })
      .to(contactRef.current, { autoAlpha: 1, yPercent: 0, duration: 1, ease: 'power3.out' }, '<')
      .fromTo('.contact-item', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.5');

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="h-screen w-full relative overflow-hidden" ref={containerRef}>
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-neon-purple/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] bg-neon-blue/10 rounded-full blur-[100px] sm:blur-[120px] md:blur-[150px] -z-10"></div>

        {/* Hero Section */}
        <section ref={heroRef} className="absolute inset-0 flex flex-col items-center justify-center pt-20 bg-black bg-cover bg-center bg-no-repeat" id="home" style={{ backgroundImage: "url('/dj.jpg')" }}>
          <div className="mt-16 relative w-full max-w-5xl px-4 dj-system flex flex-col items-center justify-center" style={{ perspective: '1000px' }}>
            <div className="absolute z-20 text-center pointer-events-auto -mt-48 sm:-mt-56 md:-mt-72 lg:-mt-96 px-4 transition-transform hover:scale-105 duration-500 w-full">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] xl:text-[8rem] font-syncopate font-black leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink hover:from-neon-pink hover:via-neon-purple hover:to-neon-blue transition-all duration-700 cursor-pointer drop-shadow-[0_0_30px_rgba(255,0,85,0.8)] hover:drop-shadow-[0_0_50px_rgba(0,240,255,0.8)]" style={{ backgroundImage: 'linear-gradient(90deg, #00f0ff, #7000ff, #ff0055, #00f0ff)', backgroundSize: '200% 200%', animation: 'gradientShift 4s ease infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                DJ ALI MAX
              </h1>
              <p className="mt-1 sm:mt-2 md:mt-4 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-gray-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] font-bold">FEEL THE BEAT • Live The Sound</p>
            </div>
            <img src="/dj-system-nobg.png" alt="DJ Controller Setup" className="w-full h-auto filter brightness-110 contrast-125 relative z-10 mix-blend-screen" />
            <div className="absolute top-[65%] left-[22%] w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_15px_#00f0ff] glow-particle z-10"></div>
            <div className="absolute top-[65%] left-[27%] w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_15px_#00f0ff] glow-particle delay-75 z-10"></div>
            <div className="absolute top-[65%] left-[71%] w-4 h-4 bg-neon-pink rounded-full shadow-[0_0_15px_#ff0055] glow-particle z-10"></div>
            <div className="absolute top-[65%] left-[76%] w-4 h-4 bg-neon-pink rounded-full shadow-[0_0_15px_#ff0055] glow-particle delay-75 z-10"></div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
            <span className="uppercase tracking-widest text-xs">Scroll to Enter</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="absolute inset-0 flex items-center justify-center bg-[#050505] p-4 sm:p-6 md:p-8" id="about">
          <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-syncopate font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink about-text" style={{ backgroundImage: 'linear-gradient(90deg, #00f0ff, #7000ff, #ff0055, #00f0ff)', backgroundSize: '200% 200%', animation: 'gradientShift 4s ease infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                WHO IS <br />ALI MAX?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed font-light about-text">
                Renowned for electrifying arenas globally, DJ Ali Max transcends traditional sets. Every performance is an orchestrated journey through soundscapes of immersive bass and striking synths.
              </p>
              <button className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink px-6 sm:px-8 py-2 sm:py-3 rounded-full text-white font-bold uppercase tracking-widest text-xs sm:text-sm hover:shadow-[0_0_20px_rgba(255,0,85,0.6)] transform hover:-translate-y-1 transition-all duration-300 about-text" style={{ backgroundImage: 'linear-gradient(90deg, #00f0ff, #7000ff, #ff0055)', backgroundSize: '200% auto' }}>Discover More</button>
            </div>
            <div className="relative about-img">
              <div className="w-full aspect-[4/5] glass rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/40 to-transparent"></div>
                <img src="/about-dj.png" alt="DJ Portrait" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section ref={servicesRef} className="absolute inset-0 flex items-center justify-center bg-[#080808] p-4 sm:p-6 md:p-8" id="services">
          <div className="max-w-7xl w-full mx-auto">
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-syncopate font-bold mb-8 sm:mb-12 md:mb-16">
              THE <span className="text-gradient">EXPERIENCE</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                { title: 'CLUB NIGHTS', desc: 'High-energy sets designed to keep the dancefloor moving until sunrise.', color: 'from-neon-pink' },
                { title: 'FESTIVALS', desc: 'Massive scale immersive audio-visual performances for the largest crowds.', color: 'from-neon-blue' },
                { title: 'PRIVATE EVENTS', desc: 'Exclusive, curated soundscapes tailored for luxury private gatherings.', color: 'from-neon-purple' }
              ].map((svc, i) => (
                <div key={i} className="service-card glass p-4 sm:p-6 md:p-8 rounded-2xl group hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${svc.color} to-transparent opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-syncopate font-bold mb-2 sm:mb-4 mt-2 sm:mt-4">{svc.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400 font-light">{svc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section ref={galleryRef} className="absolute inset-0 flex flex-col justify-center bg-[#030303] p-4 sm:p-6 md:p-8" id="gallery">
          <h2 className="px-4 sm:px-6 md:px-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-syncopate font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mb-6 sm:mb-8 md:mb-10 shrink-0" style={{ backgroundImage: 'linear-gradient(90deg, #00f0ff, #7000ff, #ff0055, #00f0ff)', backgroundSize: '200% 200%', animation: 'gradientShift 4s ease infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>VISUAL IMPACT</h2>
          <div className="w-full overflow-visible">
            <div className="flex gap-4 sm:gap-6 md:gap-8 gallery-track px-4 sm:px-6 md:px-10 w-[200vw]" style={{ width: 'max-content' }}>
              {galleryItems.map((item) => {
                const galleryLinks = {
                  1: "https://youtu.be/roKh91nyATU?si=U_ITbzvUGEwKXQql",
                  2: "https://youtu.be/yrDptkAMC9E?si=a-A3tUuBnOumMsFW",
                  3: "https://youtu.be/GcqNg37JS3c?si=4RYRQm0T0w0xVIXk"
                };
                const galleryImages = {
                  1: "/live1.jpg",
                  2: "/live2.jpg",
                  3: "/live3.jpg"
                };
                if (galleryLinks[item]) {
                  return (
                    <a key={item} href={galleryLinks[item]} target="_blank" rel="noopener noreferrer" className="w-[85vw] xs:w-[70vw] sm:w-[50vw] md:w-[45vw] lg:w-[40vw] h-[35vh] sm:h-[45vh] md:h-[50vh] glass rounded-3xl shrink-0 overflow-hidden relative group border border-white/10 block cursor-pointer transition-all duration-300">
                      <img src={galleryImages[item]} alt="Gallery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                        <span className="font-syncopate font-bold text-lg sm:text-xl md:text-2xl tracking-widest scale-90 group-hover:scale-100 transition-transform text-white">LIVE / {item}</span>
                      </div>
                    </a>
                  );
                }
                return (
                  <div key={item} className="w-[85vw] xs:w-[70vw] sm:w-[50vw] md:w-[45vw] lg:w-[40vw] h-[35vh] sm:h-[45vh] md:h-[50vh] glass rounded-3xl shrink-0 overflow-hidden relative group border border-white/10 transition-all duration-300">
                    <img src="/gallery-1.png" alt="Gallery" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <span className="font-syncopate font-bold text-lg sm:text-xl md:text-2xl tracking-widest scale-90 group-hover:scale-100 transition-transform">LIVE / {item}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} className="absolute inset-0 flex items-center justify-center bg-black/90 backdrop-blur-3xl p-4 sm:p-6 md:p-8" id="book">
          <div className="max-w-4xl w-full mx-auto text-center contact-item">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-syncopate font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mb-4 sm:mb-6" style={{ backgroundImage: 'linear-gradient(90deg, #00f0ff, #7000ff, #ff0055, #00f0ff)', backgroundSize: '200% 200%', animation: 'gradientShift 4s ease infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              BOOK NOW
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-12 font-light">Secure DJ ALI MAX for your next legendary event.</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left contact-item" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="glass w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:border-neon-pink text-white text-sm sm:text-base" />
              <input type="email" placeholder="Email Address" className="glass w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:border-neon-pink text-white text-sm sm:text-base" />
              <input type="date" className="glass w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl focus:outline-none focus:border-neon-pink text-white md:col-span-2 text-sm sm:text-base cursor-pointer" style={{ colorScheme: 'dark' }} />
              <button className="md:col-span-2 bg-gradient-to-r from-neon-pink to-neon-purple text-white font-syncopate font-bold text-base sm:text-lg md:text-xl py-3 sm:py-5 rounded-xl hover:shadow-[0_0_30px_rgba(255,0,85,0.4)] transition-all transform hover:-translate-y-1 mt-2 sm:mt-4">
                SUBMIT REQUEST
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
