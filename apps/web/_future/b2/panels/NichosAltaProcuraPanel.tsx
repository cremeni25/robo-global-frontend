import React from 'react';

export function NichosAltaProcuraPanel() {
  return (
    <section className="space-y-2">
      <h2 className="text-sm font-medium text-neutral-text-secondary uppercase tracking-wide">
        Nichos com Alta Procura
      </h2>

      <ul className="space-y-2 text-sm">
        <li className="p-3 bg-neutral-surface rounded-md">
          Educação Financeira — <strong>Alta</strong>
        </li>
        <li className="p-3 bg-neutral-surface rounded-md">
          Saúde e Performance — <strong>Média</strong>
        </li>
        <li className="p-3 bg-neutral-surface rounded-md">
          Desenvolvimento Profissional — <strong>Crescente</strong>
        </li>
      </ul>
    </section>
  );
}
