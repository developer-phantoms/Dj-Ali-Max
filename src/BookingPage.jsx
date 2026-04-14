import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Mail, Phone, Calendar, MapPin, Music, Mic2, Star, Send } from 'lucide-react';

export default function BookingPage({ onBackHome }) {
  const pageRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    gsap.fromTo(pageRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
    gsap.fromTo('.booking-item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: 'power3.out' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div ref={pageRef} className="min-h-screen pt-32 pb-20 px-4 flex flex-col items-center justify-center text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 animate-bounce shadow-[0_0_30px_rgba(34,197,94,0.5)]">
          <Send className="text-white w-10 h-10" />
        </div>
        <h1 className="text-4xl md:text-6xl font-syncopate font-black text-white mb-4">REQUEST SENT!</h1>
        <p className="text-gray-400 max-w-lg mb-10">Your booking request has been received. Our team will contact you within 24 hours to discuss the details.</p>
        <button onClick={onBackHome} className="px-10 py-4 glass rounded-full text-white uppercase tracking-widest hover:bg-white/10 transition-all font-bold">
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="min-h-screen pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-7xl font-syncopate font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mb-4 uppercase inline-block booking-item px-2" style={{ backgroundImage: 'linear-gradient(90deg, #00f0ff, #7000ff, #ff0055, #00f0ff)', backgroundSize: '200% 200%', animation: 'gradientShift 4s ease infinite', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Book DJ ALI MAX
          </h1>
          <p className="text-gray-400 text-sm sm:text-base md:text-xl tracking-widest uppercase booking-item px-4">Elevate Your Event with World-Class Sound</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-8">
            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/5 booking-item">
              <h2 className="text-xl sm:text-2xl font-syncopate font-bold mb-4 sm:mb-6 flex items-center gap-3">
                <Star className="text-neon-pink w-5 h-5 sm:w-6 sm:h-6" /> Booking Information
              </h2>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6 sm:mb-8">
                Ready to make your event legendary? Fill out the form, and let's create an unforgettable experience together. DJ Ali Max is available for global tours, festivals, clubs, and luxury private events.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-neon-blue"><Mail size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Email Us</p>
                    <p className="font-medium">mralimoghul@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-neon-purple"><Phone size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Call Us</p>
                    <p className="font-medium">03023578471</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-neon-pink"><MapPin size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold">Based In</p>
                    <p className="font-medium">Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 booking-item">
              <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                <Music className="text-neon-blue mb-3" />
                <p className="text-xs font-bold uppercase tracking-tighter">Premium Audio</p>
              </div>
              <div className="glass p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                <Mic2 className="text-neon-pink mb-3" />
                <p className="text-xs font-bold uppercase tracking-tighter">Live Setup</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass p-5 sm:p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden booking-item mb-10 lg:mb-0">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 blur-3xl rounded-full"></div>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2 ml-1">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full glass bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-neon-blue text-white transition-all font-medium" />
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2 ml-1">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full glass bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-neon-purple text-white transition-all font-medium" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2 ml-1">Event Date</label>
                  <div className="relative">
                    <input required type="date" className="w-full glass bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-neon-pink text-white transition-all font-medium" style={{ colorScheme: 'dark' }} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase font-bold text-gray-500 mb-2 ml-1">Event Location</label>
                  <input required type="text" placeholder="City, Country" className="w-full glass bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-neon-blue text-white transition-all font-medium" />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-gray-500 mb-2 ml-1">Event Type</label>
                <select className="w-full glass bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-neon-purple text-white transition-all font-medium appearance-none">
                  <option value="club" className="bg-black">Club Night</option>
                  <option value="festival" className="bg-black">Music Festival</option>
                  <option value="private" className="bg-black">Private Event</option>
                  <option value="wedding" className="bg-black">Luxury Wedding</option>
                  <option value="other" className="bg-black">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase font-bold text-gray-500 mb-2 ml-1">Tell us about your event</label>
                <textarea rows="4" placeholder="Share some details about the venue, crowd, and vibe..." className="w-full glass bg-white/5 border border-white/10 px-6 py-4 rounded-xl focus:outline-none focus:border-neon-pink text-white transition-all font-medium resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink py-5 rounded-2xl text-white font-syncopate font-black text-lg tracking-widest hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(112,0,255,0.6)] active:scale-95 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">CONFIRM REQUEST</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 text-center">
           <button onClick={onBackHome} className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-widest flex items-center gap-2 mx-auto">
             ← Return to Homepage
           </button>
        </div>
      </div>
    </div>
  );
}
