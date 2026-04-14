import React from 'react';

export default function Footer() {
  return (
    <section className="w-full relative flex items-center justify-center bg-black p-4 sm:p-6 md:p-8 z-50">
      <div className="flex space-x-6">
        <a href="https://instagram.com/djmax" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors">
          Instagram
        </a>
        <a href="https://facebook.com/djmax" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors">
          Facebook
        </a>
        <a href="https://soundcloud.com/djmax" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors">
          SoundCloud
        </a>
        <a href="https://twitter.com/djmax" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors">
          Twitter
        </a>
        <a href="https://tiktok.com/@djmax" target="_blank" rel="noopener noreferrer" className="text-white hover:text-neon-pink transition-colors">
          TikTok
        </a>
      </div>
    </section>
  );
}