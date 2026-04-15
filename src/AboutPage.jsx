import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, ArrowLeft, Headphones, Radio, Globe, Star, Zap } from 'lucide-react';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = ({ value, label, color, suffix = "" }) => {
  const [count, setCount] = React.useState(0);
  const countRef = React.useRef(null);

  useEffect(() => {
    const target = parseInt(value);
    const obj = { val: 0 };

    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: countRef.current,
        start: "top 80%",
      },
      onUpdate: () => {
        setCount(Math.floor(obj.val));
      }
    });
  }, [value]);

  return (
    <div ref={countRef} className="text-center p-2">
      <p className={`text-4xl sm:text-6xl md:text-7xl font-syncopate font-black mb-1 ${color} drop-shadow-[0_0_15px_currentColor]`}>
        {count}{suffix}
      </p>
      <p className="text-[8px] sm:text-[10px] tracking-[0.3em] font-bold text-gray-500 font-syncopate uppercase">{label}</p>
    </div>
  );
};

export default function AboutPage({ onBackHome, onNavigate }) {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const expertiseRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=4000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Initial States
      gsap.set([storyRef.current, expertiseRef.current, statsRef.current, ctaRef.current], {
        autoAlpha: 0,
        yPercent: 100
      });

      // 1. Hero Out -> Story In
      tl.to(heroRef.current, { scale: 0.8, autoAlpha: 0, duration: 1 })
        .to(storyRef.current, { yPercent: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }, '<')

        // 2. Story Out -> Expertise In
        .to(storyRef.current, { xPercent: -100, autoAlpha: 0, duration: 1 })
        .to(expertiseRef.current, { yPercent: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }, '<')

        // 3. Expertise Out -> Stats In
        .to(expertiseRef.current, { scale: 1.2, autoAlpha: 0, duration: 1 })
        .to(statsRef.current, { yPercent: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }, '<')

        // 4. Stats Out -> CTA In
        .to(statsRef.current, { yPercent: -100, autoAlpha: 0, duration: 1 })
        .to(ctaRef.current, { yPercent: 0, autoAlpha: 1, duration: 1, ease: 'power3.out' }, '<');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="h-screen w-full relative overflow-hidden bg-black text-white font-outfit" ref={containerRef}>

      {/* SECTION 1: HERO */}
      <section ref={heroRef} className="absolute inset-0 flex items-center justify-center p-4 sm:p-10 pt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="text-neon-pink font-syncopate font-bold tracking-[0.4em] text-[8px] sm:text-[10px] uppercase mb-4 block">About the Artist</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-syncopate font-black leading-tight mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" style={{ backgroundImage: 'linear-gradient(90deg, #00f0ff, #7000ff, #ff0055, #00f0ff)', backgroundSize: '200% auto', animation: 'gradientShift 4s infinite' }}>
              MASTER OF <br className="hidden sm:block" /> SOUND
            </h1>
            <p className="text-gray-400 text-xs sm:text-base md:text-lg leading-relaxed font-light max-w-md mx-auto lg:mx-0">
              Ali Max transcends traditional DJing. He is a sonic architect crafting 360-degree immersive experiences.
            </p>
            <button onClick={onBackHome} className="mt-8 sm:mt-12 group inline-flex items-center gap-2 bg-gradient-to-r from-white/10 to-transparent border border-white/10 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full uppercase tracking-widest text-[9px] sm:text-xs font-bold hover:from-neon-blue hover:to-neon-purple transition-all duration-300">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Pulse
            </button>
          </div>
          <div className="relative glass rounded-[30px] sm:rounded-[40px] overflow-hidden border border-white/10 p-2 sm:p-4 shadow-[0_0_50px_rgba(112,0,255,0.2)] max-w-[300px] sm:max-w-none mx-auto">
            <img src="/about-dj.png" alt="Ali Max" className="w-full h-auto object-cover rounded-[20px] sm:rounded-[32px]" />
          </div>
        </div>
      </section>

      {/* SECTION 2: STORY */}
      <section ref={storyRef} className="absolute inset-0 flex items-center justify-center p-6 bg-[#050505]">
        <div className="max-w-4xl text-center space-y-8">
          <Star className="text-neon-pink mx-auto w-12 h-12 animate-pulse" />
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-syncopate font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple" style={{ backgroundImage: 'linear-gradient(90deg, #00f0ff, #7000ff)', backgroundSize: '200% auto', animation: 'gradientShift 5s infinite' }}>THE ORIGIN</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <p className="text-gray-400 text-sm sm:text-base">Starting in the underground warehouses, Ali Max developed a sound that blends heavy industrial textures with cinematic melodies.</p>
            <p className="text-gray-400 text-sm sm:text-base">"Music is the only language that doesn't need translation." Every set is a unique conversation.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPERTISE */}
      <section ref={expertiseRef} className="absolute inset-0 flex items-center justify-center p-4 sm:p-10 bg-[#080808]">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-syncopate font-bold mb-8 lg:mb-16 uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink" style={{ backgroundImage: 'linear-gradient(90deg, #7000ff, #ff0055)', backgroundSize: '200% auto', animation: 'gradientShift 4s infinite' }}>Technological Prowess</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {[
              { icon: <Headphones />, title: 'Spatial Audio' },
              { icon: <Radio />, title: 'Synthesis' },
              { icon: <Globe />, title: 'Global BPM' }
            ].map((item, i) => (
              <div key={i} className="glass p-6 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/5 text-center group hover:border-neon-blue/50 transition-all duration-300">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/5 rounded-xl lg:rounded-2xl flex items-center justify-center mb-4 lg:mb-6 mx-auto text-neon-blue group-hover:shadow-[0_0_20px_#00f0ff] transition-all">
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h3 className="text-sm sm:text-lg font-syncopate font-bold mb-2 lg:mb-3 uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">{item.title}</h3>
                <p className="text-[10px] sm:text-xs text-gray-500 font-light">Pushing the boundaries of sonic energy through modular innovation.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: STATS */}
      <section ref={statsRef} className="absolute inset-0 flex items-center justify-center p-6 bg-[#030303]">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter value="500" suffix="+" label="GLOBAL SHOWS" color="text-neon-pink" />
          <AnimatedCounter value="2" suffix="M+" label="LISTENERS" color="text-neon-blue" />
          <AnimatedCounter value="45" suffix="+" label="COUNTRIES" color="text-neon-purple" />
          <AnimatedCounter value="120" suffix="+" label="RELEASES" color="text-white" />
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section ref={ctaRef} className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 bg-black">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl sm:text-6xl md:text-8xl font-syncopate font-black mb-6 md:mb-12 leading-none uppercase text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink" style={{ backgroundImage: 'linear-gradient(90deg, #00f0ff, #7000ff, #ff0055, #00f0ff)', backgroundSize: '200% auto', animation: 'gradientShift 4s infinite' }}>
            READY FOR <br className="hidden sm:block" /> THE BEAT?
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
            <button
              onClick={() => onNavigate('book')}
              className="relative group overflow-hidden px-10 py-4 sm:px-16 sm:py-6 rounded-full font-syncopate font-black text-[10px] sm:text-sm tracking-[0.2em] transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-gradientShift" style={{ backgroundSize: '200% auto' }}></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/20"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-pink blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>

              <span className="relative z-10 text-white">BOOK NOW</span>
            </button>

            <div className="flex flex-col gap-1 items-center">
              <span className="text-gray-500 text-[8px] sm:text-[10px] uppercase font-bold tracking-widest">Connect with pulse</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-purple font-black tracking-widest text-[10px] sm:text-sm uppercase">@ALI_MAX</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 sm:bottom-0 w-full">
          <Footer />
        </div>
      </section>

    </div>
  );
}
