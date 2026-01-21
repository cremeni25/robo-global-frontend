import React from 'react';

export function PerformancePanel() {
  return (
    <section className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-text-secondary uppercase tracking-wide">
        Evolução do Parceiro
      </h2>
      <div className="p-4 bg-neutral-surface rounded-md text-sm">
        Leitura histórica da sua atuação ao longo do tempo.
        <br />
        <span className="text-neutral-text-secondary">
          (dados consolidados, sem comparação externa)
        </span>
      </div>
    </section>
  );
}
