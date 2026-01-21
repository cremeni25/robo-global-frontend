import React from 'react';
import { getB2Snapshot } from '../services/b2Reader';

export function PerformancePanel() {
  const { performance } = getB2Snapshot();

  return (
    <section className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-text-secondary uppercase tracking-wide">
        Evolução do Parceiro
      </h2>
      <div className="p-4 bg-neutral-surface rounded-md text-sm">
        {performance.description}
        <br />
        <span className="text-neutral-text-secondary">
          Período analisado: {performance.period}
        </span>
      </div>
    </section>
  );
}
