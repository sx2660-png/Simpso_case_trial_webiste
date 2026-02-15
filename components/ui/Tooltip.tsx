import React, { useState } from 'react';
import { Info } from 'lucide-react';

interface TooltipProps {
  term: string;
  definition: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ term, definition }) => {
  const [show, setShow] = useState(false);

  return (
    <span className="relative inline-block group">
      <button
        onClick={() => setShow(!show)}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="inline-flex items-center gap-1 border-b border-dashed border-slate-400 text-slate-200 hover:text-white hover:border-white transition-colors cursor-help font-medium"
      >
        {term}
        <Info size={14} className="opacity-70" />
      </button>
      
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-800 border border-slate-600 p-3 rounded-md shadow-xl text-sm text-slate-300 z-50">
          {definition}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-800"></div>
        </div>
      )}
    </span>
  );
};