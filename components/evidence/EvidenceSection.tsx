import React from 'react';
import { ProofBlock } from './ProofBlock';
import { ProsecutionBlock } from './ProsecutionBlock';
import { DefenseBlock } from './DefenseBlock';
import { BalanceBlock } from './BalanceBlock';

export const EvidenceSection: React.FC = () => {
  return (
    <section className="bg-navy-900 px-4 md:px-8">
      <ProofBlock />
      <ProsecutionBlock />
      <DefenseBlock />
      <BalanceBlock />
    </section>
  );
};