import React from 'react';
import { getB2Snapshot } from '../services/b2Reader';

export function NichosAltaProcuraPanel() {
  const { highDemandNichos } = getB2Snapshot();

  return (
    <section className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-text-secondary uppercase tracking-wide">
        Nichos com Alta Procura
      </h2>

      <ul className="space-y-2 text-sm">
        {highDemandNichos.map((nicho) => (
          <li
            key={nicho.name}
            className="p-3 bg-neutral-surface rounded-md"
          >
            {nicho.name} — <strong>{nicho.demand}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
