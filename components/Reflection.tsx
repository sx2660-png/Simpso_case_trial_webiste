import React, { useState } from 'react';
import { FadeInSection } from './ui/FadeInSection';

export const Reflection: React.FC = () => {
  const [choice, setChoice] = useState<string | null>(null);

  const getFeedback = () => {
    switch (choice) {
      case 'yes':
        return "The system is designed to protect the innocent, even at the cost of failing to punish the guilty.";
      case 'no':
        return "Frustration with the outcome often stems from the tension between factual truth and legal truth.";
      case 'complicated':
        return "Legal justice is rarely simple. It balances rights, procedures, and evidence in a delicate scale.";
      default:
        return "";
    }
  };

  return (
    <section className="py-24 bg-navy-950 border-t border-slate-800 text-center px-4">
      <FadeInSection>
        <h2 className="text-3xl font-serif text-white mb-12">Final Reflection</h2>
        
        {!choice ? (
          <div className="space-y-8">
            <p className="text-xl text-slate-300 font-light">Does the design of the legal system satisfy you?</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              {['Yes', 'No', "It's complicated"].map((option) => (
                <button
                  key={option}
                  onClick={() => setChoice(option.toLowerCase().replace(' ', ''))}
                  className="px-8 py-3 border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-400 transition-all rounded-sm uppercase tracking-wider text-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto animate-in fade-in duration-700">
            <p className="text-2xl font-serif text-white mb-8">"{getFeedback()}"</p>
            <button 
              onClick={() => setChoice(null)}
              className="text-sm text-slate-500 underline hover:text-slate-300"
            >
              Reflect again
            </button>
          </div>
        )}
      </FadeInSection>
    </section>
  );
};