import React from 'react';
import { Hero } from './components/Hero';
import { Narrative } from './components/Narrative';
import { EvidenceSection } from './components/evidence/EvidenceSection';
import { Reflection } from './components/Reflection';

function App() {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-200 antialiased selection:bg-slate-700 selection:text-white">
      <header className="fixed top-0 left-0 right-0 z-50 p-6 pointer-events-none mix-blend-difference">
        <span className="font-serif text-xs uppercase tracking-[0.2em] text-white opacity-50">
          Educational Documentary
        </span>
      </header>
      
      <main>
        <Hero />
        <Narrative />
        <EvidenceSection />
        <Reflection />
      </main>

      <footer className="py-12 text-center text-slate-600 text-xs border-t border-slate-800 bg-navy-950">
        <p>© {new Date().getFullYear()} Legal Literacy Project. Educational use only.</p>
      </footer>
    </div>
  );
}

export default App;