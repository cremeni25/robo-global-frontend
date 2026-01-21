import React from 'react';
import { getB2Snapshot } from '../services/b2Reader';

export function OportunidadesPanel() {
  const { highDemandNichos, highAssertivenessNichos } = getB2Snapshot();

  return (
    <section className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-text-secondary uppercase tracking-wide">
        Oportunidades de Expansão
      </h2>

      <div className="p-4 bg-neutral-surface rounded-md text-sm">
        Foram identificados{' '}
        <strong>{highDemandNichos.length}</strong> nichos com sinais de
        demanda e{' '}
        <strong>{highAssertivenessNichos.length}</strong> nichos com boa
        assertividade técnica.
        <br />
        <span className="text-neutral-text-secondary">
          Leitura consolidada e interpretativa.
        </span>
      </div>
    </section>
  );
}
