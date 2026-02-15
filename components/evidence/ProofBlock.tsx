import React, { useState } from 'react';
import { FadeInSection } from '../ui/FadeInSection';
import { Scale, ShieldAlert } from 'lucide-react';

export const ProofBlock: React.FC = () => {
  return (
    <div className="py-20 border-b border-slate-800/50">
      <FadeInSection>
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h3 className="text-2xl font-serif text-white">What Counts as Proof?</h3>
          
          <p className="text-xl text-slate-300 font-light">
            "In American criminal law, guilt must be proven <strong className="text-white font-medium">beyond a reasonable doubt</strong>. 
            The burden belongs entirely to the prosecution."
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <ConceptCard 
              title="Burden of Proof"
              icon={<Scale className="w-8 h-8 text-slate-400 mb-4" />}
              description="The obligation to prove one's assertion. In a criminal case, this burden rests 100% on the state (Prosecution). The Defense does not need to prove what happened, only that the State's theory is flawed."
            />
            <ConceptCard 
              title="Beyond Reasonable Doubt"
              icon={<ShieldAlert className="w-8 h-8 text-slate-400 mb-4" />}
              description="The highest standard of proof. It does not mean 'beyond all possible doubt'. It means the evidence is so convincing that no reasonable person would question the defendant's guilt."
            />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

const ConceptCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative group h-64 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`absolute w-full h-full transition-all duration-500 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full backface-hidden bg-slate-800 border border-slate-700 p-8 flex flex-col items-center justify-center rounded-sm hover:border-slate-500 transition-colors">
          {icon}
          <h4 className="text-lg font-serif tracking-wider text-slate-200">{title}</h4>
          <p className="mt-4 text-xs text-slate-500 uppercase tracking-widest">Click to reveal</p>
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-slate-700 border border-slate-600 p-8 flex flex-col items-center justify-center rounded-sm text-center">
          <p className="text-slate-200 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};