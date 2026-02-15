import React from 'react';
import { FadeInSection } from '../ui/FadeInSection';
import { AccordionCard } from '../ui/AccordionCard';
import { Tooltip } from '../ui/Tooltip';

export const DefenseBlock: React.FC = () => {
  return (
    <div className="py-20 border-b border-slate-800/50">
      <FadeInSection>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif text-white mb-8 pl-4 border-l-2 border-slate-600">The Defense’s Counter-Narrative</h3>
          
          <div className="space-y-2 mb-12">
            <AccordionCard title="Handling of Evidence">
              The defense argued that the crime scene was contaminated by mishandling. Evidence was left in hot vans, and photos were taken without scales. They introduced the possibility that evidence was planted or compromised by incompetence.
            </AccordionCard>
            
            <AccordionCard title="DNA Collection Methods">
              Defense experts challenged the reliability of the DNA labs used, citing potential cross-contamination. They argued that even if the blood was Simpson's, it could have been planted using a reference vial that the police had access to.
            </AccordionCard>
            
            <AccordionCard title="Police Conduct & The Tapes">
              Detective Mark Fuhrman, who found the glove, was revealed to have a history of racist language. The defense played tapes of him using racial slurs, suggesting a motive to frame Simpson and casting doubt on the integrity of the entire investigation.
            </AccordionCard>

             <AccordionCard title="Media Atmosphere">
              The defense argued that the rush to judgment in the media created an environment where a fair investigation was impossible, leading police to focus solely on Simpson to the exclusion of other leads.
            </AccordionCard>

            <AccordionCard title="Procedural vs. Substantive Justice">
              This case highlighted a core legal tension. <strong className="text-slate-200">Substantive Justice</strong> asks "Did the defendant actually commit the crime?" while <strong className="text-slate-200">Procedural Justice</strong> asks "Was the legal process fair and lawful?" The defense argued that because the <em>process</em> was corrupted by police misconduct (procedural failure), the state lost its moral authority to convict, regardless of the factual truth.
            </AccordionCard>
          </div>

          <div className="text-center py-12 px-6 bg-navy-950 border-y border-slate-800 my-12">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-200 italic">
              “If it doesn’t fit, you must acquit.”
            </h2>
          </div>

          <div className="bg-slate-800 p-6 rounded border border-slate-700 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="text-lg font-serif text-white mb-2">What is Reasonable Doubt?</h4>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                It is not absolute certainty. It is a doubt based on reason and common sense. If the jury believes there is a <span className="text-white font-medium">real possibility</span> (not just an imaginary one) that the defendant is innocent, or that the evidence is corrupted, they must vote Not Guilty.
              </p>
            </div>
          </div>

        </div>
      </FadeInSection>
    </div>
  );
};