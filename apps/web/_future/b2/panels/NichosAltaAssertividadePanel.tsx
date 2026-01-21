import React from 'react';
import { getB2Snapshot } from '../services/b2Reader';

export function NichosAltaAssertividadePanel() {
  const { highAssertivenessNichos } = getB2Snapshot();

  return (
    <section className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-text-secondary uppercase tracking-wide">
        Nichos com Alta Assertividade Técnica
      </h2>

      <ul className="space-y-2 text-sm">
        {highAssertivenessNichos.map((nicho) => (
          <li
            key={nicho.name}
            className="p-3 bg-neutral-surface rounded-md"
          >
            {nicho.name} — <strong>{nicho.level}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
