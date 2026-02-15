import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionCardProps {
  title: string;
  children: React.ReactNode;
}

export const AccordionCard: React.FC<AccordionCardProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-700 bg-slate-800/50 rounded-lg overflow-hidden mb-4 transition-all duration-300 hover:border-slate-500">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
      >
        <h4 className="font-serif text-lg text-slate-100">{title}</h4>
        {isOpen ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 pb-6 pt-2 text-slate-300 font-light leading-relaxed text-sm md:text-base border-t border-slate-700/50">
          {children}
        </div>
      </div>
    </div>
  );
};