import React from 'react';
import { FadeInSection } from './ui/FadeInSection';

export const Hero: React.FC = () => {
  const scrollToNarrative = () => {
    document.getElementById('narrative')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative bg-gradient-to-b from-navy-950 to-navy-900 border-b border-slate-800">
      <FadeInSection>
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-wide leading-tight">
            The Trial That <br />
            <span className="text-slate-400">Divided America</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 font-light italic max-w-2xl mx-auto">
            “Can justice remain objective in a divided society?”
          </p>

          <div className="pt-12">
            <button 
              onClick={scrollToNarrative}
              className="px-8 py-3 bg-transparent border border-slate-400 text-slate-200 uppercase tracking-widest text-sm hover:bg-white hover:text-navy-900 transition-all duration-300"
            >
              Enter the Case
            </button>
          </div>
        </div>
      </FadeInSection>

      <div className="absolute bottom-10 animate-bounce text-slate-600">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};