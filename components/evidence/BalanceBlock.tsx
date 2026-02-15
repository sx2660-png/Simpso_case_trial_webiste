import React, { useState } from 'react';
import { FadeInSection } from '../ui/FadeInSection';

export const BalanceBlock: React.FC = () => {
  const [balance, setBalance] = useState(50);

  const getNarrativeText = (value: number) => {
    if (value < 40) return "The pattern appears coherent and persuasive.";
    if (value > 60) return "Procedural uncertainty may weaken certainty.";
    return "Weighing the admissibility and weight of evidence.";
  };

  return (
    <div className="py-24">
      <FadeInSection>
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-serif text-white text-center mb-16">Balance of Doubt</h3>
          
          <div className="relative pt-12 pb-16 px-8 bg-gradient-to-r from-slate-900 via-navy-950 to-slate-900 border border-slate-800 rounded-xl shadow-2xl">
            
            <div className="flex justify-between text-sm md:text-base font-serif text-slate-400 mb-8 uppercase tracking-wider">
              <span className={`transition-colors ${balance < 40 ? 'text-white' : ''}`}>Prosecution Narrative</span>
              <span className={`transition-colors ${balance > 60 ? 'text-white' : ''}`}>Defense Narrative</span>
            </div>

            <input 
              type="range" 
              min="0" 
              max="100" 
              value={balance} 
              onChange={(e) => setBalance(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
            />
            
            <div className="mt-12 h-16 flex items-center justify-center">
              <p className="text-center text-lg md:text-xl font-light text-slate-200 transition-all duration-300">
                {getNarrativeText(balance)}
              </p>
            </div>

          </div>

          <div className="mt-24 text-center space-y-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-serif text-slate-400">Historical Outcome</h4>
            <div className="p-8 border-t border-b border-slate-700/50">
              <p className="text-2xl md:text-3xl font-serif text-white mb-6">
                In 1995, the jury returned a verdict: <br/>
                <span className="italic">Not Guilty.</span>
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                The verdict does not declare innocence.<br/>
                It declares that guilt was not proven beyond a reasonable doubt.
              </p>
            </div>
          </div>

        </div>
      </FadeInSection>
    </div>
  );
};