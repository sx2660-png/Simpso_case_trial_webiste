import React from 'react';
import { FadeInSection } from './ui/FadeInSection';
import { Tooltip } from './ui/Tooltip';

export const Narrative: React.FC = () => {
  return (
    <section id="narrative" className="py-24 px-6 bg-navy-900 flex justify-center">
      <div className="max-w-2xl w-full space-y-8 text-slate-300 leading-relaxed font-light text-lg">
        
        <FadeInSection>
          <h2 className="text-3xl font-serif text-white mb-8 border-b border-slate-800 pb-4">The Case Context</h2>
        </FadeInSection>

        <FadeInSection delay={100}>
          <p>
            On the night of June 12, 1994, Nicole Brown Simpson and Ronald Goldman were found brutally murdered outside Brown's condominium in Brentwood, Los Angeles. The brutality of the crime shocked the nation, but the identity of the primary suspect turned the tragedy into a global phenomenon.
          </p>
        </FadeInSection>

        <FadeInSection delay={200}>
          <p>
            O.J. Simpson, a former NFL star and actor, was charged with the murders. The subsequent trial, televised to millions, became a cultural flashpoint involving issues of race, celebrity, and police conduct in Los Angeles.
          </p>
        </FadeInSection>

        <FadeInSection delay={300}>
          <p>
            The legal proceedings would test the American justice system's ability to remain impartial under intense media scrutiny. Central to the trial was the <Tooltip term="Presumption of Innocence" definition="In criminal law, the defendant starts legally innocent. The state must prove guilt; the defendant does not need to prove innocence." />.
          </p>
        </FadeInSection>

      </div>
    </section>
  );
};