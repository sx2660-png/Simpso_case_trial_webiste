import React, { useState } from 'react';
import { FadeInSection } from '../ui/FadeInSection';
import { AccordionCard } from '../ui/AccordionCard';

export const ProsecutionBlock: React.FC = () => {
  const [conviction, setConviction] = useState(50);

  return (
    <div className="py-20 border-b border-slate-800/50">
      <FadeInSection>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif text-white mb-8 pl-4 border-l-2 border-slate-600">The Prosecution’s Narrative</h3>
          
          <div className="space-y-2 mb-12">
            <AccordionCard title="The Glove">
              A bloody leather glove was found at the crime scene, and a matching glove was discovered at O.J. Simpson's estate. The prosecution argued this was a direct physical link between the defendant and the murders, claiming Simpson dropped it while fleeing.
            </AccordionCard>
            
            <AccordionCard title="DNA Evidence">
              Blood drops leading away from the bodies matched Simpson’s genetic markers. Blood found in Simpson's Bronco and on socks in his bedroom contained DNA from both victims. At the time, the statistical probability of a random match was 1 in 170 million.
            </AccordionCard>
            
            <AccordionCard title="Timeline and Behavior">
              Simpson had a history of domestic violence against Nicole Brown. On the night of the murder, he was unaccounted for during the crucial window of time. His behavior during the infamous Bronco chase was presented as the actions of a guilty man fleeing justice.
            </AccordionCard>
          </div>

          <div className="bg-slate-800/30 p-8 rounded-lg border border-slate-700">
            <label className="block text-center text-slate-300 font-serif mb-6 text-lg">
              How convinced are you by this narrative?
            </label>
            
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={conviction} 
              onChange={(e) => setConviction(parseInt(e.target.value))}
              className="w-full mb-4 accent-slate-400"
            />
            
            <div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest font-medium">
              <span>Unconvinced</span>
              <span>Certain</span>
            </div>
            
            <div className="text-center mt-4 text-slate-400 font-mono text-sm">
              Reflection Level: {conviction}%
            </div>
          </div>

        </div>
      </FadeInSection>
    </div>
  );
};